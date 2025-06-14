// src/pages/api/create-checkout-session.ts (最终生产版)
import type { APIRoute } from 'astro';
import Stripe from 'stripe';
import dotenv from 'dotenv';

// 告诉 Astro，这个端点是服务器端渲染的
export const prerender = false;

// 加载环境变量
dotenv.config();
const secretKey = process.env.STRIPE_SECRET_KEY;

if (!secretKey) {
  throw new Error("FATAL: Stripe secret key not found in .env file.");
}

const stripe = new Stripe(secretKey, {
  apiVersion: "2024-04-10",
});

// 预先定义好所有可能的自定义字段组合
const fieldConfigs = {
  spotify: [
    { key: 'spotify_username', label: { type: 'custom', custom: 'Your Spotify Username' }, type: 'text' },
    { key: 'spotify_password', label: { type: 'custom', custom: 'Your Spotify Password' }, type: 'text' },
  ],
  duolingo: [
    { key: 'duolingo_account', label: { type: 'custom', custom: 'Your Duolingo Username or Email' }, type: 'text' },
  ],
  recharge_email: [
    { key: 'recharge_email', label: { type: 'custom', custom: 'Email to apply the subscription to' }, type: 'text' },
  ],
  delivery_email: [
    { key: 'delivery_email', label: { type: 'custom', custom: 'Email to receive the new account details' }, type: 'text' },
  ]
};

export const POST: APIRoute = async ({ request }) => {
  if (request.method !== 'POST') {
    return new Response(null, { status: 405, statusText: 'Method Not Allowed' });
  }

  try {
    const body = await request.json();
    const { priceId, productSlug, successUrl, cancelUrl } = body;

    if (!priceId || !productSlug) {
      return new Response(JSON.stringify({ error: "Price ID and Product Slug are required" }), { status: 400 });
    }

    // 初始化 Stripe Checkout Session 的创建参数
    const checkoutOptions: Stripe.Checkout.SessionCreateParams = {
      line_items: [{ price: priceId, quantity: 1 }],
      mode: 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl,
      // phone_number_collection: {
      //   enabled: true, // 始终收集手机号
      // },
      metadata: {
        product_slug: productSlug,
      },
      custom_fields: [], // 初始化为空数组
    };
    
    // 使用映射来决定为当前产品应用哪个字段配置
    const slugToFieldConfigMap: { [key: string]: keyof typeof fieldConfigs } = {
        'spotify-premium': 'spotify',
        'duolingo-super': 'duolingo',
        'microsoft-365': 'recharge_email',
        'youtube-premium-music': 'recharge_email',
        'netflix-premium-4k': 'delivery_email',
        'hbo-max-4k': 'delivery_email',
    };

    const configKey = slugToFieldConfigMap[productSlug];

    // 如果当前产品需要在支付页面收集额外信息
    if (configKey) {
        // 获取对应的字段配置，并将它们都设为可选
        checkoutOptions.custom_fields = fieldConfigs[configKey].map(field => ({...field, optional: true}));

        // 添加一个通用的备注字段，让用户可以选择全新账户
        checkoutOptions.custom_fields.push({
            key: 'notes',
            label: { type: 'custom', custom: 'Notes (e.g., "I need a brand new account")' },
            optional: true,
            type: 'text',
        });
        
        // 告诉Stripe准备提交这些自定义字段
        checkoutOptions.submit_type = 'pay';
    }
    
    // 使用最终的配置对象来创建 Stripe Checkout Session
    const session = await stripe.checkout.sessions.create(checkoutOptions);

    // 将创建好的 Session ID 返回给前端
    return new Response(JSON.stringify({ sessionId: session.id }), { status: 200 });

  } catch (error) {
    console.error("Error creating Stripe session:", error);
    return new Response(JSON.stringify({ error: (error as Error).message }), { status: 500 });
  }
};