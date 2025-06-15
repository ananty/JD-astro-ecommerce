// src/pages/api/create-checkout-session.ts (最终可靠版)
import type { APIRoute } from 'astro';
import Stripe from 'stripe';
import dotenv from 'dotenv';

// 这一行在本地开发时会从 .env 加载变量。在 Cloudflare 上，它不会做任何事，因为 .env 文件不存在。
dotenv.config();

export const prerender = false;

// 优先从平台注入的环境变量获取 (Cloudflare)，如果获取不到 (本地开发)，再从 process.env 获取 (由 dotenv 加载)。
const secretKey = (import.meta.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY) as string;

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

  // 检查 Stripe 是否已正确初始化
  if (!stripe) {
      console.error("Stripe has not been initialized. Check your secret key.");
      return new Response(JSON.stringify({ error: "Server payment configuration error." }), { status: 500 });
  }

  try {
    const body = await request.json();
    const { priceId, productSlug, successUrl, cancelUrl } = body;

    if (!priceId || !productSlug) {
      return new Response(JSON.stringify({ error: "Price ID and Product Slug are required" }), { status: 400 });
    }

    const checkoutOptions: Stripe.Checkout.SessionCreateParams = {
      line_items: [{ price: priceId, quantity: 1 }],
      mode: 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: { product_slug: productSlug },
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
    
    const session = await stripe.checkout.sessions.create(checkoutOptions);

    return new Response(JSON.stringify({ sessionId: session.id }), { status: 200 });

  } catch (error) {
    console.error("Error creating Stripe session:", error);
    return new Response(JSON.stringify({ error: (error as Error).message }), { status: 500 });
  }
};