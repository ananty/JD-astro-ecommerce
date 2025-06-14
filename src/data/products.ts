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
    name: 'Spotify Premium', // SEO: 更有描述性的标题
    category: 'Music Streaming Service', // SEO: 更具体的分类
    shortDescription: 'personal account. ad-free, offline downloads, superior sound quality.', // SEO: 包含核心价值点
    
    // SEO: 下面的 HTML 内容使用了 h2, h3, strong, ul/ol/dl 等语义化标签，并自然融入了关键词
    longDescription: `
            <h2>Spotify Premium — Full Control, Uninterrupted Sound</h2>
      <p>Unlock a premium listening experience with a Spotify Premium subscription. Get full access to ad-free music, offline playback, high-quality sound, and complete control over your account — all at a fraction of the regular price.</p>
      
      <h3>🎵 Key Features of Spotify Premium:</h3>
      <ul>
        <li><strong>Ad-Free Listening:</strong> Enjoy uninterrupted music without any ad breaks.</li>
        <li><strong>Offline Playback:</strong> Download your favorite songs and playlists to listen anywhere, even without an internet connection.</li>
        <li><strong>High-Quality Audio:</strong> Immerse yourself in superior sound quality.</li>
        <li><strong>Full Account Control:</strong> This is a dedicated personal account. You can change the password and settings immediately after activation.</li>
      </ul>

      <h2>🔧 How It Works</h2>
      <ol>
        <li><strong>Place Your Order:</strong> Checkout securely through our Stripe page.</li>
        <li><strong>Submit Your Spotify Credentials:</strong> During payment, Submit your Spotify login email and password (required only once for activation).</li>
        <li><strong>We Activate Premium:</strong> We handle everything securely and promptly. Your account will be activated.</li>
        <li><strong>Change Your Password:</strong> After setup, we strongly recommend changing your password to ensure your privacy and security.</li>
      </ol>

      <h2>FAQ</h2>
      <div class="faq-accordion">
        <details>
          <summary>What if I don't have a Spotify account?</summary>
          <div class="faq-content">
            <p>No problem — you can create a free account before purchase, or we can assist you.</p>
          </div>
        </details>
        <details>
          <summary>How do I provide my password if I log in with Facebook, Google, or Apple?</summary>
          <div class="faq-content">
            <p>Just go to Spotify's official <a href="https://www.spotify.com/account/set-device-password/" target="_blank" rel="noopener noreferrer">"Set a device password"</a> page. create a standard password before sending it to us.</p>
          </div>
        </details>
        <details>
          <summary>What's the difference between Spotify different region and others?</summary>
          <div class="faq-content">
            <p>The music library is virtually identical. The main differences are in regional charts and some exclusive content, but this is minimal. Your personalized recommendations are based entirely on your personal listening history, not the account's region.</p>
          </div>
        </details>
        <details>
          <summary>Can I buy if my current account is from a different region?</summary>
          <div class="faq-content">
            <p>Absolutely. We handle the entire region change process for you. Just provide your account login details on the secure checkout page, and we'll take care of the rest.</p>
          </div>
        </details>
        <details>
          <summary>Will I lose my playlists, followers, or liked songs?</summary>
          <div class="faq-content">
            <p>Not at all. Your account remains the same — only the subscription status is upgraded.</p>
          </div>
        </details>
      </div>

      <hr>
      <div class="customer-support-cta">
        <h4>Still Have Questions?</h4>
        <p>If you have any inquiries about our Spotify Premium plans, please do not hesitate to <a href="/contact">contact our customer support</a>.</p>
      </div>
    `,
    
    // SEO: 特性列表简洁明了，突出核心卖点
    features: ['Personal Account', 'Full Control', 'Ad-Free Music', 'Offline Listening'],
    
    // 更新了价格，并假设了新的 Stripe Price ID
    skus: [
      { id: 'sp-3m', duration: '3 Months', price: 9.00, currency: 'USD', currencySymbol: '$', stripePriceId: 'price_1RZUUEJuY2t8VoKmRr7bfrGh' },
      { id: 'sp-6m', duration: '6 Months', price: 15.00, currency: 'USD', currencySymbol: '$', stripePriceId: 'price_1RZUUEJuY2t8VoKm9vegic1s' },
      { id: 'sp-12m', duration: '12 Months', price: 25.00, currency: 'USD', currencySymbol: '$', stripePriceId: 'price_1RZUUEJuY2t8VoKmjwmjlI89' },
    ],
    
    listImage: '/images/products/cards/spotify-card.png',
    
    // SEO: alt 文本描述了图片内容
    galleryImages: [
      { src: '/images/products/gallery/spotify-1.png', alt: 'Spotify Premium interface on a desktop computer showing personalized playlists' },
      { src: '/images/products/gallery/spotify-2.png', alt: 'Spotify mobile app demonstrating the offline download feature for a playlist' },
      { src: '/images/products/gallery/spotify-3.png', alt: 'Close-up of the high-quality audio settings in the Spotify app' },
    ],
  },
  {
    slug: 'netflix-premium-4k',
    name: 'Netflix Premium 4K', // SEO: 描述性标题
    category: 'Video Streaming Service', // SEO: 具体分类
    shortDescription: 'PIN-protected. 4K Ultra HD.', // SEO: 包含核心卖点

    longDescription: `
      <h2>Experience Netflix in Stunning 4K Ultra HD</h2>
      <p>Upgrade your entertainment with our Netflix Premium 4K plan — a cost-effective way to enjoy ultra high-definition streaming on your own secure, private profile within a shared account.

Whether you're binge-watching a new series or hosting movie night, this plan ensures the highest quality experience across all your devices.</p>

      <h3>🔑 Why Choose Our Netflix Premium Plan</h3>
      <ul>
        <li><strong>🎥 Ultra HD 4K + HDR Streaming:</strong> Watch your favorite shows and movies in cinema-grade 4K resolution with HDR support — perfect for modern TVs and monitors.</li>
        <li><strong>🔐 Private Profile with PIN Protection:</strong> You’ll receive a dedicated profile (e.g., “Profile 2”) and are encouraged to set a PIN lock to secure your watch history, preferences, and recommendations.</li>
        <li><strong>📱 Multi-Device Compatibility:</strong> Stream across up to 2 of your personal devices, including smartphones, tablets, laptops, and smart TVs. Enjoy simultaneous streaming on 1 device at a time.</li>
        <li><strong>🌍 Global Access:</strong> Our accounts support users worldwide — no matter where you’re located.</li>
      </ul>

      <h2>How It Works</h2>
      <ol>
        <li><strong>Place Your Order:</strong> Complete payment via our secure checkout.</li>
        <li><strong>Get Instant Delivery:</strong> We’ll send the shared login credentials and your assigned profile name to your email.</li>
        <li><strong>Set Your Profile PIN:</strong> Lock your profile for full privacy and start streaming instantly.</li>
      </ol>

      <h2>FAQ</h2>
      <div class="faq-accordion">
        <details>
          <summary>How do I set a PIN to protect my profile?</summary>
          <div class="faq-content">
            <p>Setting a PIN is easy and highly recommended. Simply log in to the <a href="https://netflix.com/YourAccount" target="_blank" rel="noopener noreferrer">Netflix Account page</a>, scroll down to the "Profile & Parental Controls" section, find your profile, and expand the options. Click "Change" next to "Profile Lock" and follow the on-screen instructions.</p>
          </div>
        </details>
        <details>
          <summary>Why is the video quality not 4K?</summary>
          <div class="faq-content">
            <p>Make sure your device and internet connection support 4K playback. For more details, please refer to the <a href="https://help.netflix.com/en/node/13444" target="_blank" rel="noopener noreferrer">official Netflix 4K documentation</a>.</p>
          </div>
        </details>
        <details>
          <summary>Is this a private account?</summary>
          <div class="faq-content">
            <p>This is a <strong>private profile</strong> on a shared Netflix Premium account. Your profile is for your exclusive use, and setting a PIN guarantees your privacy within the shared environment.</p>
          </div>
        </details>
        <details>
          <summary>Can I change the account's email or password?</summary>
          <div class="faq-content">
            <p>No. To ensure stability and access for all members of the shared plan, please do not change the main account's login credentials. You have full control over your own profile, including setting a PIN.</p>
          </div>
        </details>
      </div>

      <hr>
      <div class="customer-support-cta">
        <h4>Still Have Questions?</h4>
        <p>If you have any questions about our Netflix Premium 4K plan, please don't hesitate to <a href="/contact">contact our customer support</a>.</p>
      </div>
    `,

    features: ['4K Ultra HD Quality', 'PIN-Protected Profile', 'Global Access', 'Instant Delivery'],
    
    // 价格已更新
    skus: [
      { id: 'nf-1m', duration: '1 Month', price: 6.00, currency: 'USD', currencySymbol: '$', stripePriceId: 'price_1RZUUCJuY2t8VoKmwtRatXpC' },
      { id: 'nf-3m', duration: '3 Months', price: 13.00, currency: 'USD', currencySymbol: '$', stripePriceId: 'price_1RZUUCJuY2t8VoKmh417BlOY' },
    ],
    
    listImage: '/images/products/cards/netflix-card.png',
    
    galleryImages: [
      { src: '/images/products/gallery/netflix-1.png', alt: 'A movie being streamed in stunning 4K quality on a large TV screen via Netflix' },
      { src: '/images/products/gallery/netflix-2.png', alt: 'The Netflix profile selection screen, showing multiple user profiles' },
      { src: '/images/products/gallery/netflix-3.png', alt: 'The Netflix user interface on a tablet, showcasing a wide variety of content' },
    ],
  },
  
  {
    slug: 'youtube-premium-music',
    name: 'YouTube Premium', // SEO: 描述性标题
    category: 'Video & Music Streaming', // SEO: 具体分类
    shortDescription: '1 year ad-free YouTube and YouTube Music. Unlock background play, offline downloads.', // SEO: 包含核心卖点

    longDescription: `
      <h2>Enjoy YouTube Premium + Music — Ad-Free, Anywhere</h2>
      <p>Upgrade your viewing and listening with a 12-month <strong>YouTube Premium + Music</strong> subscription. This all-in-one plan removes ads across all of YouTube, unlocks exclusive features, and gives you full access to the YouTube Music Premium streaming service.</p>

      <h3>🔥 Key Features of YouTube Premium:</h3>
      <ul>
        <li><strong>🚫 Ad-Free:</strong> Watch millions of videos without any interruptions from ads before, during, or as overlays.</li>
        <li><strong>📱 Background Play:</strong> Keep videos playing on your mobile device even when you open another app or lock your screen. Perfect for listening to lectures, podcasts, and music.</li>
        <li><strong>⬇️ Offline Downloads:</strong> Save videos and playlists to your device for smooth viewing anytime, anywhere.</li>
        <li><strong>🎬 YouTube Originals:</strong> Get access to all exclusive YouTube Originals series and movies.</li>
        <li><strong>🎵 YouTube Music Premium Included:</strong> Unlimited access to YouTube Music: ad-free, offline, and with audio-only background playback.</li>
      </ul>

      <h2>✅ How It Works</h2>
      <ol>
        <li><strong>Provide Your Google Email:</strong> On our Stripe checkout page, simply enter the Google email address you want to link.</li>
        <li><strong>We Send an Invite:</strong> Within 24 hours, you’ll receive an official YouTube Premium Family invitation email from Google.</li>
        <li><strong>No Active Subscription:</strong> Click the link in the email from Google to join — no password or sensitive info needed.</li>
      </ol>

      <h2>FAQ</h2>
      <div class="faq-accordion">
        <details>
          <summary>What information do I need to provide?</summary>
          <div class="faq-content">
            <p>Just your Google account email address — we’ll handle the rest.</p>
          </div>
        </details>
        <details>
          <summary>Do I need to change my country or payment settings?</summary>
          <div class="faq-content">
            <p>In most cases, no changes are needed. If your account has region restrictions, we’ll contact you after your order to assist — no worries.</p>
          </div>
        </details>
        <details>
          <summary> Is this has region restriction?</summary>
          <div class="faq-content">
            <p>Many users worldwide can join without any issue. We'll contact you if manual setup is required.</p>
          </div>
        </details>
      </div>

      <hr>
      <div class="customer-support-cta">
        <h4>Still Have Questions?</h4>
        <p>If you have any questions about the YouTube Premium plan, please <a href="/contact">contact our customer support</a>.</p>
      </div>
    `,

    features: ['Ad-Free YouTube & Music', 'Background Play', 'Offline Downloads', 'YouTube Originals'],
    
    // 价格已更新
    skus: [
      { id: 'yt-12m', duration: '12 Months', price: 29.00, currency: 'USD', currencySymbol: '$', stripePriceId: 'price_1RZUU9JuY2t8VoKmZ7Chfajq' },
    ],
    
    listImage: '/images/products/cards/youtube-card.png',
    
    galleryImages: [
      { src: '/images/products/gallery/youtube-1.png', alt: 'An ad-free YouTube video playing on a laptop screen' },
      { src: '/images/products/gallery/youtube-2.png', alt: 'The YouTube Music application interface on a smartphone' },
      { src: '/images/products/gallery/youtube-3.png', alt: 'A demonstration of YouTube\'s background play feature on a mobile device' },
    ],
  },
  {
    slug: 'duolingo-super',
    name: 'Duolingo Super', // SEO: 描述性标题
    category: 'Education & Language Learning', // SEO: 具体分类
    shortDescription: 'ad-free lessons, unlimited hearts, and personalized practice.', // SEO: 包含核心卖点

    // SEO: 使用语义化标签和关键词
    longDescription: `
      <h2>Upgrade to Duolingo Super and boost Your Learning</h2>
      <p>Supercharge your language learning journey with a <strong>Duolingo Super subscription</strong>. This premium upgrade removes all barriers, allowing you to learn faster, more effectively, and without any interruptions. We handle the upgrade on your existing account, so you keep all your progress.</p>

      <h3>🚀 Key Features of Duolingo Super:</h3>
      <ul>
        <li><strong>🥇 #1 Language Learning App:</strong> Join millions of learners worldwide using Duolingo to master new languages.</li>
        <li><strong>✨ Ad-Free Experience:</strong> Stay focused on your goals without distractions or interruptions.</li>
        <li><strong>❤️ Unlimited Hearts:</strong> Make as many mistakes as you need — learn without limits, no waiting required.</li>
        <li><strong>Personalized Practice Hub:</strong> Get targeted review exercises to strengthen your weak areas and improve faster.</li>
      </ul>

      <h2>📦 How It Works</h2>
       <ol>
        <li><strong>Place Your Order:</strong> Use our secure checkout to purchase the upgrade.</li>
        <li><strong>We Send an Invite:</strong> Simply provide your Duolingo username or registered email address during checkout.</li>
        <li><strong>No Active Subscription:</strong> We will upgrade your account within 24 hours — no password required, no progress lost.</li>
      </ol>

      <h2>FAQ</h2>
      <div class="faq-accordion">
        <details>
          <summary>Will I lose my progress or learning streak?</summary>
          <div class="faq-content">
            <p>No. Your existing account is upgraded directly — your progress, achievements, and streak remain untouched.</p>
          </div>
        </details>
        <details>
          <summary>Can I buy if I’m currently on a Duolingo trial or subscription?</summary>
          <div class="faq-content">
            <p>To ensure a smooth upgrade, your account must not have an active subscription. Please wait for your current trial or plan to expire before purchasing.</p>
          </div>
        </details>
        <details>
          <summary>How can I check my subscription status?</summary>
          <div class="faq-content">
            <p>Go to Settings → Super Duolingo. You’ll see your subscription status and renewal info there.</p>
          </div>
        </details>
        <details>
          <summary>What devices are supported?</summary>
          <div class="faq-content">
            <p>All of them.</p>
          </div>
        </details>
      </div>

      <hr>
      <div class="customer-support-cta">
        <h4>Still Have Questions?</h4>
        <p>If you have any further questions about the Duolingo Super upgrade, feel free to <a href="/contact">contact our customer support</a>.</p>
      </div>
    `,

    features: ['Ad-Free Experience', 'Unlimited Hearts', 'Personalized Practice', 'Keep Your Progress'],
    
    // 价格已更新
    skus: [
      { id: 'duo-12m', duration: '12 Months', price: 7.00, currency: 'USD', currencySymbol: '$', stripePriceId: 'price_1RZUU4JuY2t8VoKm1oPw7SGq' },
    ],
    
    listImage: '/images/products/cards/duolingo-card.png',
    
    galleryImages: [
      { src: '/images/products/gallery/duolingo-1.png', alt: 'Duolingo Super interface showing unlimited hearts feature' },
      { src: '/images/products/gallery/duolingo-2.png', alt: 'A personalized practice session in the Duolingo app' },
      { src: '/images/products/gallery/duolingo-3.png', alt: 'An ad-free language lesson in progress on Duolingo Super' },
    ],
  },
  {
    slug: 'microsoft-365',
    name: 'Microsoft 365 Family', // SEO: 描述性标题
    category: 'Productivity Software', // SEO: 具体分类
    shortDescription: 'Get premium Office apps, 1TB OneDrive.', // SEO: 包含核心卖点

    longDescription: `
      <h2>Microsoft 365 Family – Power Up Your Work & Life</h2>
      <p>Join thousands of professionals and students who rely on Microsoft 365 Family via JaideePass — secure, affordable, and 100% legitimate.</p>

      <h3>✨ Key Features:</h3>
      <ul>
        <li><strong>✅ Full Office Suite Access:</strong> Unlock premium versions of Word, Excel, PowerPoint, Outlook, OneNote, and more — always up to date and synced across all devices.</li>
        <li><strong>☁️ 1TB OneDrive Storage (Per User):</strong> Each member receives 1TB of secure, personal cloud storage to back up files, access them anywhere, and share seamlessly.</li>
        <li><strong>🖥️ Multi-Device Use:</strong> Install and use Office apps on up to 5 devices per user — including Windows, Mac, iOS, and Android.</li>
        <li><strong>🔐 Advanced Security:</strong> Stay protected with ransomware detection, file recovery, and enhanced security in OneDrive and Outlook.</li>
      </ul>

      <h2>🚀 How It Works</h2>
        <ol>
        <li><strong>Purchase the Plan:</strong> Use our secure checkout to purchase.</li>
        <li><strong>Submit Your Microsoft Email:</strong> Simply provide your Microsoft account email during checkout.</li>
        <li><strong>Accept the Invite:</strong> Once accepted, all benefits are activated on your account.</li>
      </ol>
      
      <h2>FAQ</h2>
      <div class="faq-accordion">
        <details>
          <summary>Is this an official Microsoft subscription?</summary>
          <div class="faq-content">
            <p>Yes, this is 100% official and legitimate. You will be joining a Microsoft 365 Family plan via an official invitation sent directly from Microsoft to your own personal account.</p>
          </div>
        </details>
        <details>
          <summary>Are my OneDrive files private and secure?</summary>
          <div class="faq-content">
            <p>Absolutely. Each user gets separate, private 1TB storage. No one else in the family group can access your files.</p>
          </div>
        </details>
        <details>
          <summary>What if I already have a Microsoft subscription?</summary>
          <div class="faq-content">
            <p>If your current subscription has expired or will soon, we recommend canceling renewal and joining our Family plan instead. If you’re mid-subscription, we can help you time the upgrade smoothly.</p>
          </div>
        </details>
      </div>

      <hr>
      <div class="customer-support-cta">
        <h4>Still Have Questions?</h4>
        <p>For any questions about joining our Microsoft 365 Family plan, please <a href="/contact">contact our customer support</a>.</p>
      </div>
    `,

    features: ['1TB OneDrive Storage', 'Premium Office Apps', 'Multi-Device Support', 'Official Family Plan'],
    
    // 价格已更新
    skus: [
      { id: 'ms-12m', duration: '12 Months', price: 9.9, currency: 'USD', currencySymbol: '$', stripePriceId: 'price_1RZrfOJuY2t8VoKmPLyz5FMd' },
    ],
    
    listImage: '/images/products/cards/m365-card.jpg', // 注意是 .jpg
    
    galleryImages: [
      { src: '/images/products/gallery/m365-1.jpg', alt: 'The suite of Microsoft 365 applications including Word, Excel, and PowerPoint' },
      { src: '/images/products/gallery/m365-2.png', alt: 'A screenshot of the OneDrive interface showing 1TB of cloud storage' },
      { src: '/images/products/gallery/m365-3.png', alt: 'Microsoft Office apps running seamlessly on a laptop and a tablet' },
    ],
  },
    // 在 productsData 数组中，找到并替换这个对象
  {
    slug: 'hbo-max-4k',
    name: 'HBO Max 4K', // SEO: 描述性标题
    category: 'Video Streaming Service', // SEO: 具体分类
    shortDescription: '4K. Own private profile.', // SEO: 包含核心卖点

    longDescription: `
      <h2>Dive into Iconic Worlds with HBO Max in 4K</h2>
      <p>Get your own private profile on our <strong>HBO Max 4K</strong> plan and unlock a universe of premium, critically-acclaimed entertainment. From the epic sagas of Westeros like <em>House of the Dragon</em> to the thrilling adventures of the DC Universe, experience it all in stunning 4K clarity.</p>

      <h3>🔥 Key Features:</h3>
      <ul>
        <li><strong>Stunning 4K Ultra HD:</strong> Dive into your favorite stories — from House of the Dragon to The Batman — in breathtaking detail and clarity.</li>
        <li><strong>Private Sub-Account:</strong> You will be assigned your own profile within our premium account, ensuring your viewing experience is personal and separate.</li>
        <li><strong>Independent Watch History:</strong> Your recommendations, watch list, and "continue watching" section are yours and yours alone.</li>
        <li><strong>Massive Content Library:</strong> Access the complete HBO catalog, Warner Bros. blockbusters, DC Universe titles, award-winning Max Originals, and more.</li>
      </ul>

      <h2>⚙️ How It Works</h2>
         <ol>
        <li><strong>Purchase the Plan:</strong> Use our secure checkout to purchase.</li>
        <li><strong>Check Your Email:</strong> We'll send you the account login credentials and clearly indicate your personal profile (e.g., "Profile 3").</li>
        <li><strong>Set Up & Start Watching:</strong> You can lock your profile with a PIN for added privacy. Start streaming immediately.</li>
      </ol>

      <h2>FAQ</h2>
      <div class="faq-accordion">
        <details>
          <summary>Is this a private account?</summary>
          <div class="faq-content">
            <p>Yes, it’s a family account, you get a fully private sub-profile that keeps your data separate and secure.</p>
          </div>
        </details>
        <details>
          <summary>Can I change the main account's password?</summary>
          <div class="faq-content">
            <p>No. To ensure stability and uninterrupted access for all members of the shared plan, we ask that you do not change the main account's login credentials. You have full control over your own profile.</p>
          </div>
        </details>
        <details>
          <summary>What happens if I have login issues?</summary>
          <div class="faq-content">
            <p>We offer responsive support via WhatsApp or email. Reach out anytime for quick help with login, playback, or device activation.</p>
          </div>
        </details>
      </div>

      <hr>
      <div class="customer-support-cta">
        <h4>Still Have Questions?</h4>
        <p>If you have any questions about our HBO Max 4K plan, please feel free to <a href="/contact">contact our customer support</a>.</p>
      </div>
    `,

    features: ['4K Ultra HD', 'Private Profile', 'DC & HBO Content', 'Instant Delivery'],
    
    // 价格已更新
    skus: [
      { id: 'hbo-1m', duration: '1 Month', price: 5.00, currency: 'USD', currencySymbol: '$', stripePriceId: 'price_1RZUU6JuY2t8VoKmRw3YVhkk' },
      { id: 'hbo-3m', duration: '3 Months', price: 12.00, currency: 'USD', currencySymbol: '$', stripePriceId: 'price_1RZUU6JuY2t8VoKmzf4HnH9s' },
    ],
    
    listImage: '/images/products/cards/hbo-card.png',
    
    galleryImages: [
      { src: '/images/products/gallery/hbo-1.png', alt: 'The "House of the Dragon" series being shown on the HBO Max interface' },
      { src: '/images/products/gallery/hbo-2.png', alt: 'A collection of DC Universe movies available for streaming on HBO Max' },
      { src: '/images/products/gallery/hbo-3.png', alt: 'HBO Max application running on a TV, a tablet, and a smartphone' },
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