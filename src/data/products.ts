// src/data/products.ts
// 定义 SKU (库存量单位) 的接口
export interface Sku {
  id: string; // SKU的唯一ID, 例如: 'sp-1m'
  duration: string; // 时长描述, 例如: '1 Month'
  price: number; // 价格 (美元)
  currency: string; // 货币单位, 固定为 'USD'
  currencySymbol: string; // 货币符号, 固定为 '$'
}

// 定义产品信息的接口
export interface Product {
  slug: string; // URL友好的唯一标识符, 例如: 'spotify-premium'
  name: string; // 产品名称
  shortDescription: string; // 用于首页卡片的简短描述
  longDescription: string; // 用于产品页的详细描述 (你后续会填充)
  features: string[]; // 用于首页卡片的产品特性列表
  skus: Sku[]; // 产品的SKU列表
  category: string; // 产品分类, 例如: "Music Streaming"
  imageUrl?: string; // 产品卡片图片路径 (例如: /images/products/spotify-card.png)
  heroImageUrl?: string; // 产品详情页主图路径 (例如: /images/products/spotify-hero.png)
}

// 所有产品的数据 - 价格已更新为美元 (示例价格，请自行调整)
export const productsData: Product[] = [
  {
    slug: 'spotify-premium',
    name: 'Spotify Premium',
    shortDescription: 'Personal account, Fully in control / Tens of millions of songs / Personalized recommendations.', // 英文描述
    longDescription: 'Your detailed product description for Spotify Premium goes here. Explain the benefits, features, and why customers should choose this plan.', // 英文描述
    features: ['Personal account, Fully in control', 'Tens of millions of songs', 'Personalized recommendations'], // 英文特性
    skus: [
      { id: 'sp-1m', duration: '1 Month', price: 3.99, currency: 'USD', currencySymbol: '$' }, 
      { id: 'sp-3m', duration: '3 Months', price: 10.99, currency: 'USD', currencySymbol: '$' },
      { id: 'sp-6m', duration: '6 Months', price: 20.99, currency: 'USD', currencySymbol: '$' },
      { id: 'sp-12m', duration: '12 Months', price: 39.99, currency: 'USD', currencySymbol: '$' },
    ],
    category: 'Music Streaming', // 英文分类
    imageUrl: '/images/placeholders/spotify_card.png', // 请确保这些图片存在于 public/images/placeholders/
    heroImageUrl: '/images/placeholders/spotify_hero.png',
  },
  {
    slug: 'netflix-premium-4k',
    name: 'Netflix Premium 4K',
    shortDescription: '4K Ultra HD / Separate account / Available on Mobile, Tablet, TV.', // 英文描述
    longDescription: 'Your detailed product description for Netflix Premium 4K goes here.', // 英文描述
    features: ['4K Ultra HD available', 'Separate account for privacy', 'Watch on Mobile, Tablet, TV'], // 英文特性
    skus: [
      { id: 'nf-1m', duration: '1 Month', price: 4.49, currency: 'USD', currencySymbol: '$' },
      { id: 'nf-3m', duration: '3 Months', price: 12.49, currency: 'USD', currencySymbol: '$' },
      { id: 'nf-6m', duration: '6 Months', price: 23.49, currency: 'USD', currencySymbol: '$' },
      { id: 'nf-12m', duration: '12 Months', price: 44.99, currency: 'USD', currencySymbol: '$' },
    ],
    category: 'Video Streaming', // 英文分类
    imageUrl: '/images/placeholders/netflix_card.png',
    heroImageUrl: '/images/placeholders/netflix_hero.png',
  },
  {
    slug: 'youtube-premium-music',
    name: 'YouTube Premium + Music',
    shortDescription: 'Ad-free / Offline playback / Includes YouTube Music / Background play.', // 英文描述
    longDescription: 'Your detailed product description for YouTube Premium + Music goes here.', // 英文描述
    features: ['Ad-free viewing', 'Offline playback', 'Includes YouTube Music', 'Background play supported'], // 英文特性
    skus: [
      { id: 'yt-12m', duration: '12 Months', price: 39.99, currency: 'USD', currencySymbol: '$' },
    ],
    category: 'Video & Music Streaming', // 英文分类
    imageUrl: '/images/placeholders/youtube_card.png',
    heroImageUrl: '/images/placeholders/youtube_hero.png',
  },
  {
    slug: 'hbo-max-4k',
    name: 'HBO Max 4K',
    shortDescription: 'Separate watch history / 4K Ultra HD / Independent profiles / Multi-device.', // 英文描述
    longDescription: 'Your detailed product description for HBO Max 4K goes here.', // 英文描述
    features: ['Separate watch history', '4K Ultra HD streaming', 'Independent user profiles', 'Available on Mobile, Tablet, TV'], // 英文特性
    skus: [
      { id: 'hbo-1m', duration: '1 Month', price: 4.29, currency: 'USD', currencySymbol: '$' },
      { id: 'hbo-3m', duration: '3 Months', price: 11.99, currency: 'USD', currencySymbol: '$' },
      { id: 'hbo-6m', duration: '6 Months', price: 22.99, currency: 'USD', currencySymbol: '$' },
      { id: 'hbo-12m', duration: '12 Months', price: 43.99, currency: 'USD', currencySymbol: '$' },
    ],
    category: 'Video Streaming', // 英文分类
    imageUrl: '/images/placeholders/hbo_card.png',
    heroImageUrl: '/images/placeholders/hbo_hero.png',
  },
  {
    slug: 'duolingo-super',
    name: 'Duolingo Super',
    shortDescription: '🥇 Language learning App / Ad-free / Unlimited hearts.', // 英文描述
    longDescription: 'Your detailed product description for Duolingo Super goes here.', // 英文描述
    features: ['Top language learning App', 'Ad-free experience', 'Unlimited hearts for learning'], // 英文特性
    skus: [
      { id: 'duo-1m', duration: '1 Month', price: 3.99, currency: 'USD', currencySymbol: '$' },
      { id: 'duo-3m', duration: '3 Months', price: 10.99, currency: 'USD', currencySymbol: '$' },
      { id: 'duo-6m', duration: '6 Months', price: 20.99, currency: 'USD', currencySymbol: '$' },
      { id: 'duo-12m', duration: '12 Months', price: 39.99, currency: 'USD', currencySymbol: '$' },
    ],
    category: 'Education', // 英文分类
    imageUrl: '/images/placeholders/duolingo_card.png',
    heroImageUrl: '/images/placeholders/duolingo_hero.png',
  },
  {
    slug: 'microsoft-365',
    name: 'Microsoft 365',
    shortDescription: '1TB OneDrive / Link 5 devices / Win, Mac, iOS, Android.', // 英文描述
    longDescription: 'Your detailed product description for Microsoft 365 goes here.', // 英文描述
    features: ['1TB OneDrive cloud storage', 'Link up to 5 devices', 'Available on Win, Mac, iOS, Android'], // 英文特性
    skus: [
      { id: 'ms-12m', duration: '12 Months', price: 45.99, currency: 'USD', currencySymbol: '$' },
    ],
    category: 'Productivity', // 英文分类
    imageUrl: '/images/placeholders/m365_card.png',
    heroImageUrl: '/images/placeholders/m365_hero.png',
  },
];

// 根据slug获取产品信息的函数
export function getProductBySlug(slug?: string): Product | undefined {
  if (!slug) return undefined;
  return productsData.find(product => product.slug === slug);
}

// 获取指定数量的随机产品，如果提供了currentSlug，则排除当前产品
export function getRandomProducts(count: number, currentSlug?: string): Product[] {
  const eligibleProducts = currentSlug 
    ? productsData.filter(p => p.slug !== currentSlug) // 如果有当前产品slug，则过滤掉它
    : [...productsData]; // 否则使用所有产品
  
  const shuffled = eligibleProducts.sort(() => 0.5 - Math.random()); // 随机打乱数组
  return shuffled.slice(0, count); // 返回指定数量的产品
}
