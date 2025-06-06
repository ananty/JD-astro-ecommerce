// src/data/products.ts (版本 2 - 支持图片库和长描述)

// SKU 接口保持不变
export interface Sku {
  id: string; // SKU的唯一ID, 例如: 'sp-1m'
  duration: string; // 时长描述, 例如: '1 Month'
  price: number; // 价格 (美元)
  currency: string; // 货币单位, 固定为 'USD'
  currencySymbol: string; // 货币符号, 固定为 '$'
  stripePriceId?: string; // (新增，可选) 用于存储Stripe Price ID，为未来集成做准备
}

// 图片库中单张图片的接口
export interface GalleryImage {
  src: string; // 图片路径
  alt: string; // 图片描述文字
}

// 产品接口更新
export interface Product {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  longDescription: string; // 将存储带HTML标签的详细描述
  features: string[];
  skus: Sku[];
  listImage: string; // (新增) 用于产品列表页的卡片图
  galleryImages: GalleryImage[]; // (新增) 用于产品详情页的图片库
}

// 所有产品的数据
export const productsData: Product[] = [
  {
    slug: 'spotify-premium',
    name: 'Spotify Premium',
    category: 'Music Streaming',
    shortDescription: 'Your personal account with millions of songs and personalized recommendations.',
    longDescription: `
      <h2>Experience Music Like Never Before</h2>
      <p>With Spotify Premium, you get unlimited access to a world of music. Listen to your favorite artists, discover new tracks, and create personalized playlists for any mood or moment. This is your own private account, giving you full control.</p>
      
      <h3>Key Features:</h3>
      <ul>
        <li><strong>Ad-Free Listening:</strong> Enjoy uninterrupted music without any ad breaks.</li>
        <li><strong>Offline Playback:</strong> Download your favorite songs and playlists to listen anywhere, even without an internet connection.</li>
        <li><strong>High-Quality Audio:</strong> Immerse yourself in superior sound quality.</li>
        <li><strong>Full Control:</strong> This is a dedicated personal account. You can change the email, password, and settings.</li>
      </ul>

      <h2>Before You Buy</h2>
      <p>Please note that this is a subscription service activated on a new or your provided account details. A full warranty is provided for the entire duration of your purchase. Our support team is available 24/7 to assist with any setup questions.</p>
      
      <h2>Frequently Asked Questions (FAQ)</h2>
      <dl>
        <dt>Q: How quickly will I receive my account?</dt>
        <dd>A: Account details are typically delivered to your email within 5-15 minutes after payment confirmation.</dd>
        <dt>Q: Is this a shared or family account?</dt>
        <dd>A: No, this is a private, personal premium account just for you.</dd>
      </dl>
    `,
    features: ['Personal Account', 'Millions of Songs', 'Personalized Recommendations'],
    skus: [
      { id: 'sp-1m', duration: '1 Month', price: 3.99, currency: 'USD', currencySymbol: '$', stripePriceId: 'YOUR_STRIPE_PRICE_ID_HERE' },
      { id: 'sp-3m', duration: '3 Months', price: 10.99, currency: 'USD', currencySymbol: '$', stripePriceId: 'YOUR_STRIPE_PRICE_ID_HERE' },
      { id: 'sp-6m', duration: '6 Months', price: 20.99, currency: 'USD', currencySymbol: '$', stripePriceId: 'YOUR_STRIPE_PRICE_ID_HERE' },
      { id: 'sp-12m', duration: '12 Months', price: 39.99, currency: 'USD', currencySymbol: '$', stripePriceId: 'YOUR_STRIPE_PRICE_ID_HERE' },
    ],
    listImage: '/images/products/cards/spotify-card.png',
    galleryImages: [
      { src: '/images/products/gallery/spotify-1.png', alt: 'Spotify Premium interface on a desktop computer' },
      { src: '/images/products/gallery/spotify-2.png', alt: 'Spotify mobile app showing a playlist' },
      { src: '/images/products/gallery/spotify-3.png', alt: 'Offline playback feature demonstration' },
    ],
  },
  {
    slug: 'netflix-premium-4k',
    name: 'Netflix Premium 4K',
    category: 'Video Streaming',
    shortDescription: 'Watch your favorite shows and movies in stunning 4K Ultra HD on your own private screen.',
    longDescription: `
      <h2>The Ultimate Streaming Experience</h2>
      <p>Upgrade your movie nights with Netflix Premium. Enjoy breathtaking 4K Ultra HD quality on a wide range of devices. This plan provides you with a dedicated, private screen on a shared account, ensuring your watch history and recommendations are completely separate.</p>
      
      <h2>Before You Buy</h2>
      <p>This subscription provides one private screen on a shared premium account. You will be given a profile name and a PIN to ensure your privacy. Please do not change the account's password or email.</p>
      
      <h2>Frequently Asked Questions (FAQ)</h2>
      <dl>
        <dt>Q: Can I watch on multiple devices?</dt>
        <dd>A: You can log in on multiple devices, but you can only stream on one screen at a time with this plan.</dd>
        <dt>Q: Is this my own account?</dt>
        <dd>A: It is a private profile/screen on a shared account, protected by a PIN code for your exclusive use.</dd>
      </dl>
    `,
    features: ['4K Ultra HD', 'Private Screen with PIN', 'Watch on any device'],
    skus: [
      { id: 'nf-1m', duration: '1 Month', price: 4.49, currency: 'USD', currencySymbol: '$', stripePriceId: 'YOUR_STRIPE_PRICE_ID_HERE' },
      { id: 'nf-3m', duration: '3 Months', price: 12.49, currency: 'USD', currencySymbol: '$', stripePriceId: 'YOUR_STRIPE_PRICE_ID_HERE' },
      { id: 'nf-6m', duration: '6 Months', price: 23.49, currency: 'USD', currencySymbol: '$', stripePriceId: 'YOUR_STRIPE_PRICE_ID_HERE' },
      { id: 'nf-12m', duration: '12 Months', price: 44.99, currency: 'USD', currencySymbol: '$', stripePriceId: 'YOUR_STRIPE_PRICE_ID_HERE' },
    ],
    listImage: '/images/products/cards/netflix-card.png',
    galleryImages: [
      { src: '/images/products/gallery/netflix-1.png', alt: 'Netflix 4K content being played on a large TV screen' },
      { src: '/images/products/gallery/netflix-2.png', alt: 'Netflix profile selection screen' },
      { src: '/images/products/gallery/netflix-3.png', alt: 'Netflix interface on a tablet device' },
    ],
  },
  // 你可以按照这个格式为其他产品 (YouTube, HBO, Duolingo, M365) 添加 longDescription 和 galleryImages
  // 为了简洁，我暂时省略了其他产品的详细描述，但保留了它们的结构
  {
    slug: 'youtube-premium-music',
    name: 'YouTube Premium + Music',
    category: 'Video & Music Streaming',
    shortDescription: 'Enjoy YouTube and YouTube Music ad-free, offline, and in the background.',
    longDescription: `<p>Detailed description for YouTube Premium coming soon.</p>`,
    features: ['Ad-free viewing', 'Offline playback', 'Includes YouTube Music'],
    skus: [
      { id: 'yt-12m', duration: '12 Months', price: 39.99, currency: 'USD', currencySymbol: '$', stripePriceId: 'YOUR_STRIPE_PRICE_ID_HERE' },
    ],
    listImage: '/images/products/cards/youtube-card.png',
    galleryImages: [
      { src: '/images/products/gallery/youtube-1.png', alt: 'YouTube Premium ad-free viewing example' }
    ],
  },
  {
    slug: 'hbo-max-4k',
    name: 'HBO Max 4K',
    category: 'Video Streaming',
    shortDescription: 'Stream all of HBO, plus hit series, movies, and Max Originals in 4K.',
    longDescription: `<p>Detailed description for HBO Max 4K coming soon.</p>`,
    features: ['Separate watch history', '4K Ultra HD', 'Independent profiles'],
    skus: [
      { id: 'hbo-1m', duration: '1 Month', price: 4.29, currency: 'USD', currencySymbol: '$', stripePriceId: 'YOUR_STRIPE_PRICE_ID_HERE' },
      { id: 'hbo-3m', duration: '3 Months', price: 11.99, currency: 'USD', currencySymbol: '$', stripePriceId: 'YOUR_STRIPE_PRICE_ID_HERE' },
      { id: 'hbo-6m', duration: '6 Months', price: 22.99, currency: 'USD', currencySymbol: '$', stripePriceId: 'YOUR_STRIPE_PRICE_ID_HERE' },
      { id: 'hbo-12m', duration: '12 Months', price: 43.99, currency: 'USD', currencySymbol: '$', stripePriceId: 'YOUR_STRIPE_PRICE_ID_HERE' },
    ],
    listImage: '/images/products/cards/hbo-card.png',
    galleryImages: [
      { src: '/images/products/gallery/hbo-1.png', alt: 'HBO Max 4K content on a TV' }
    ],
  },
  {
    slug: 'duolingo-super',
    name: 'Duolingo Super',
    category: 'Education',
    shortDescription: 'Learn a language faster with no ads and unlimited hearts.',
    longDescription: `<p>Detailed description for Duolingo Super coming soon.</p>`,
    features: ['Ad-free experience', 'Unlimited hearts', 'Top language learning app'],
    skus: [
      { id: 'duo-1m', duration: '1 Month', price: 3.99, currency: 'USD', currencySymbol: '$', stripePriceId: 'YOUR_STRIPE_PRICE_ID_HERE' },
      { id: 'duo-3m', duration: '3 Months', price: 10.99, currency: 'USD', currencySymbol: '$', stripePriceId: 'YOUR_STRIPE_PRICE_ID_HERE' },
      { id: 'duo-6m', duration: '6 Months', price: 20.99, currency: 'USD', currencySymbol: '$', stripePriceId: 'YOUR_STRIPE_PRICE_ID_HERE' },
      { id: 'duo-12m', duration: '12 Months', price: 39.99, currency: 'USD', currencySymbol: '$', stripePriceId: 'YOUR_STRIPE_PRICE_ID_HERE' },
    ],
    listImage: '/images/products/cards/duolingo-card.png',
    galleryImages: [
      { src: '/images/products/gallery/duolingo-1.png', alt: 'Duolingo Super learning interface' }
    ],
  },
  {
    slug: 'microsoft-365',
    name: 'Microsoft 365',
    category: 'Productivity',
    shortDescription: 'Get premium Office apps, 1TB of cloud storage, and advanced security.',
    longDescription: `<p>Detailed description for Microsoft 365 coming soon.</p>`,
    features: ['1TB OneDrive storage', 'Link up to 5 devices', 'Premium Office apps'],
    skus: [
      { id: 'ms-12m', duration: '12 Months', price: 45.99, currency: 'USD', currencySymbol: '$', stripePriceId: 'YOUR_STRIPE_PRICE_ID_HERE' },
    ],
    listImage: '/images/products/cards/m365-card.jpg',
    galleryImages: [
      { src: '/images/products/gallery/m365-1.jpg', alt: 'Microsoft 365 apps suite' }
    ],
  },
];

// 函数保持不变
export function getProductBySlug(slug?: string): Product | undefined {
  if (!slug) return undefined;
  return productsData.find(product => product.slug === slug);
}

export function getRandomProducts(count: number, currentSlug?: string): Product[] {
  const eligibleProducts = currentSlug 
    ? productsData.filter(p => p.slug !== currentSlug)
    : [...productsData];
  
  const shuffled = eligibleProducts.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}