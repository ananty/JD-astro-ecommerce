// src/pages/api/create-checkout-session.ts (最终版 - 无 dotenv)
import type { APIRoute } from 'astro';
import Stripe from 'stripe';

// 告诉 Astro，这个端点是服务器端渲染的
export const prerender = false;

// 直接使用 import.meta.env，这是 Astro 推荐的跨环境方式
// 在本地，它会读取 .env 文件；在 Cloudflare，它会读取后台设置的环境变量
const secretKey = import.meta.env.STRIPE_SECRET_KEY;

// 在模块加载时就进行检查，如果密钥不存在，服务器启动会失败，这是好的实践
if (!secretKey) {
  throw new Error("FATAL ERROR: STRIPE_SECRET_KEY environment variable is not set. Please check your .env file locally or your hosting provider's settings in production.");
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
    return new Response(JSON.stringify({ message: "Method Not Allowed" }), { status: 405 });
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
    
    const session = await stripe.checkout.sessions.create(checkoutOptions);

    return new Response(JSON.stringify({ sessionId: session.id }), { status: 200 });

  } catch (error) {
    console.error("Error creating Stripe session:", error);
    return new Response(JSON.stringify({ error: "An internal server error occurred." }), { status: 500 });
  }
};