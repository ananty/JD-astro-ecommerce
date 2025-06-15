// src/pages/api/create-checkout-session.ts (最终完整版)
import type { APIRoute } from 'astro';
import Stripe from 'stripe';

// 告诉 Astro，这个端点是服务器端渲染的，不参与预构建
export const prerender = false;

// 预先定义好所有可能的自定义字段组合，方便管理
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

export const POST: APIRoute = async ({ request, locals }) => {
  // 检查请求方法
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ message: "Method Not Allowed" }), { status: 405 });
  }

  try {
    // 1. 使用 Astro 推荐的方式从运行时环境获取密钥
    const secretKey = locals.runtime?.env?.STRIPE_SECRET_KEY;

    // 2. 健壮性检查，如果密钥不存在则立即失败并报错
    if (!secretKey) {
      console.error("FATAL: STRIPE_SECRET_KEY not found in runtime environment. Check platform's environment variable settings.");
      return new Response(JSON.stringify({ error: "Server configuration error." }), { status: 500 });
    }
    
    // 3. 初始化 Stripe
    const stripe = new Stripe(secretKey, {
      apiVersion: "2024-04-10",
    });
    
    // 4. 解析前端发来的数据
    const body = await request.json();
    const { priceId, productSlug, successUrl, cancelUrl } = body;

    if (!priceId || !productSlug) {
      return new Response(JSON.stringify({ error: "Price ID and Product Slug are required" }), { status: 400 });
    }

    // 5. 构建 Stripe Checkout Session 的参数
    const checkoutOptions: Stripe.Checkout.SessionCreateParams = {
      line_items: [{ price: priceId, quantity: 1 }],
      mode: 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        product_slug: productSlug,
      },
      custom_fields: [],
    };
    
    const slugToFieldConfigMap: { [key: string]: keyof typeof fieldConfigs } = {
        'spotify-premium': 'spotify',
        'duolingo-super': 'duolingo',
        'microsoft-365': 'recharge_email',
        'youtube-premium-music': 'recharge_email',
        'netflix-premium-4k': 'delivery_email',
        'hbo-max-4k': 'delivery_email',
    };

    const configKey = slugToFieldConfigMap[productSlug];

    if (configKey) {
        checkoutOptions.custom_fields = fieldConfigs[configKey].map(field => ({...field, optional: true}));
        checkoutOptions.custom_fields.push({
            key: 'notes',
            label: { type: 'custom', custom: 'Notes (e.g., "I need a brand new account")' },
            optional: true,
            type: 'text',
        });
        checkoutOptions.submit_type = 'pay';
    }
    
    // 6. 创建并返回 Session
    const session = await stripe.checkout.sessions.create(checkoutOptions);
    return new Response(JSON.stringify({ sessionId: session.id }), { status: 200 });

  } catch (error) {
    console.error("Error creating Stripe session:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
    return new Response(JSON.stringify({ error: "An internal server error occurred.", details: errorMessage }), { status: 500 });
  }
};