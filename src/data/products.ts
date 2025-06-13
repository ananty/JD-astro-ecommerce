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
      { id: 'sp-3m', duration: '3 Months', price: 9.00, currency: 'USD', currencySymbol: '$', stripePriceId: 'price_1RXeH3JuY2t8VoKmu3CpyhB0' },
      { id: 'sp-6m', duration: '6 Months', price: 15.00, currency: 'USD', currencySymbol: '$', stripePriceId: 'price_1RXeISJuY2t8VoKmb9brWuSA' },
      { id: 'sp-12m', duration: '12 Months', price: 25.00, currency: 'USD', currencySymbol: '$', stripePriceId: 'price_1RXeJFJuY2t8VoKmaRG6lVJj' },
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
      <h2>Stream in Stunning 4K with a Netflix Premium Profile</h2>
      <p>Upgrade your movie nights with our <strong>Netflix Premium 4K</strong> plan. This service gives you access to the highest video quality available on Netflix through your own private, PIN-protected profile on a shared premium account. Enjoy breathtaking 4K Ultra HD and HDR content on a wide range of devices.</p>

      <h3>Key Features of Our Netflix Plan:</h3>
      <ul>
        <li><strong>Ultra HD 4K Quality:</strong> Watch content in the best possible resolution, bringing cinematic quality right to your home.</li>
        <li><strong>Complete Privacy with Profile PIN:</strong> You will get your own dedicated profile. We strongly recommend setting a <strong>Profile Lock PIN</strong> to ensure only you can access your watch history and recommendations.</li>
        <li><strong>Multi-Device Access:</strong> Log in on any of your compatible devices (TV, laptop, tablet, phone). You can bind up to two devices and stream on one device at a time.</li>
        <li><strong>Global Availability:</strong> Our accounts support users from all around the world.</li>
      </ul>

      <h2>How It Works</h2>
      <p>The process is simple and fast. After you complete the payment, we will deliver the shared account login credentials and your dedicated profile details (e.g., "Profile 2") directly to the email address you provide during checkout.</p>

      <h2>Frequently Asked Questions (FAQ) for Netflix Sharing</h2>
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
            <p>Netflix automatically adjusts video quality based on your device, internet connection, and the content itself. To get 4K, ensure you are using a 4K-compatible device, have a stable internet connection of at least 15-25 Mbps, and are watching a title available in 4K. For more details, please refer to the <a href="https://help.netflix.com/en/node/13444" target="_blank" rel="noopener noreferrer">official Netflix 4K documentation</a>.</p>
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
      { id: 'nf-1m', duration: '1 Month', price: 6.00, currency: 'USD', currencySymbol: '$', stripePriceId: 'REPLACE_WITH_NETFLIX_1M_PRICE_ID' },
      { id: 'nf-3m', duration: '3 Months', price: 13.00, currency: 'USD', currencySymbol: '$', stripePriceId: 'REPLACE_WITH_NETFLIX_3M_PRICE_ID' },
    ],
    
    listImage: '/images/products/cards/netflix-card.png',
    
    galleryImages: [
      { src: '/images/products/gallery/netflix-1.png', alt: 'A movie being streamed in stunning 4K quality on a large TV screen via Netflix' },
      { src: '/images/products/gallery/netflix-2.png', alt: 'The Netflix profile selection screen, showing multiple user profiles' },
      { src: '/images/products/gallery/netflix-3.png', alt: 'The Netflix user interface on a tablet, showcasing a wide variety of content' },
    ],
  },
  // 你可以按照这个格式为其他产品 (YouTube, HBO, Duolingo, M365) 添加 longDescription 和 galleryImages
  // 为了简洁，我暂时省略了其他产品的详细描述，但保留了它们的结构
  {
    slug: 'youtube-premium-music',
    name: 'YouTube Premium', // SEO: 描述性标题
    category: 'Video & Music Streaming', // SEO: 具体分类
    shortDescription: '1 year ad-free YouTube and YouTube Music. Unlock background play, offline downloads.', // SEO: 包含核心卖点

    longDescription: `
      <h2>The Ultimate YouTube Experience, Uninterrupted</h2>
      <p>Upgrade your viewing and listening with a 12-month <strong>YouTube Premium + Music</strong> subscription. This all-in-one plan removes ads across all of YouTube, unlocks exclusive features, and gives you full access to the YouTube Music Premium streaming service.</p>

      <h3>Key Features of YouTube Premium:</h3>
      <ul>
        <li><strong>Completely Ad-Free:</strong> Watch millions of videos without any interruptions from ads before, during, or as overlays.</li>
        <li><strong>Background Play:</strong> Keep videos playing on your mobile device even when you open another app or lock your screen. Perfect for listening to lectures, podcasts, and music.</li>
        <li><strong>Offline Downloads:</strong> Download videos and playlists to your mobile device to watch later, perfect for travel or areas with poor connectivity.</li>
        <li><strong>YouTube Originals:</strong> Get access to all exclusive YouTube Originals series and movies.</li>
        <li><strong>YouTube Music Premium Included:</strong> Your subscription automatically includes full access to the YouTube Music app, featuring a massive library, ad-free listening, offline mode, and a convenient audio-only playback option.</li>
      </ul>

      <h2>Important: Before You Buy (3 Simple Checks)</h2>
      <p>To ensure we can add you to our family plan, please complete these quick checks:</p>
      <ol>
        <li><strong>Confirm Your Google Play Region:</strong> Visit <a href="https://play.google.com/wishlist" target="_blank" rel="noopener noreferrer">play.google.com</a>. The country displayed at the bottom-right of the page must be <strong>Hong Kong 🇭🇰, USA 🇺🇸, or Canada 🇨🇦</strong>. If it shows a different region, please contact our <a href="https://wa.me/message/M3GYT4MYO2H2M1" target="_blank" rel="noopener noreferrer">WhatsApp support</a> before purchasing.</li>
        <li><strong>Check Your Payment Profiles:</strong> Visit <a href="https://payments.google.com/gp/w/u/0/home/settings" target="_blank" rel="noopener noreferrer">payments.google.com</a>. If you have multiple payment profiles, you must close the extra ones, leaving only a single active profile.</li>
        <li><strong>No Active Subscription:</strong> Your Google account must not have an active YouTube Premium or Google One subscription.</li>
      </ol>

      <h2>How to Get Your Subscription</h2>
      <p>Please provide your <strong>Google account email address</strong> on the secure Stripe checkout page. After your payment is complete, we will send an official family group invitation from Google to that email. The process is typically completed within 24 hours.</p>

      <h2>Frequently Asked Questions (FAQ) for YouTube Premium</h2>
      <div class="faq-accordion">
        <details>
          <summary>Are there any differences between regions?</summary>
          <div class="faq-content">
            <p>No, the YouTube Premium benefits are global. Once you join the family plan, you can enjoy all features anywhere in the world where YouTube is accessible.</p>
          </div>
        </details>
        <details>
          <summary>What if my Google Play region is not HK/US/CA?</summary>
          <div class="faq-content">
            <p>You can still purchase, but please contact our <a href="https://wa.me/message/M3GYT4MYO2H2M1" target="_blank" rel="noopener noreferrer">support team</a> immediately after receiving your invitation email. Our team will provide assistance to help you accept the family group invitation.</p>
          </div>
        </details>
        <details>
          <summary>I'm overseas, but not in HK/US/CA. Can I buy?</summary>
          <div class="faq-content">
            <p>Yes. The key is your Google account's payment profile settings, not your physical location. Please follow the "Before You Buy" steps. If you need help joining after receiving the invitation, our support team is ready to assist.</p>
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
      { id: 'yt-12m', duration: '12 Months', price: 29.00, currency: 'USD', currencySymbol: '$', stripePriceId: 'REPLACE_WITH_YOUTUBE_12M_PRICE_ID' },
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
      <h2>Upgrade to Duolingo Super and Accelerate Your Learning</h2>
      <p>Supercharge your language learning journey with a <strong>Duolingo Super subscription</strong>. This premium upgrade removes all barriers, allowing you to learn faster, more effectively, and without any interruptions. We handle the upgrade on your existing account, so you keep all your progress.</p>

      <h3>Key Features of Duolingo Super:</h3>
      <ul>
        <li><strong>🥇 #1 Language Learning App:</strong> Upgrade your experience on the world's most popular language learning platform.</li>
        <li><strong>Ad-Free Experience:</strong> Focus completely on your lessons with zero ads to slow you down.</li>
        <li><strong>Unlimited Hearts:</strong> Mistakes are part of learning. With unlimited hearts, you can practice without being forced to stop or wait.</li>
        <li><strong>Personalized Practice Hub:</strong> Get access to a dedicated hub that helps you review your mistakes and hone your skills for faster mastery.</li>
      </ul>

      <h2>How to Get Your Upgrade</h2>
      <p>The process is simple and secure. All we need is your <strong>Duolingo Username or the email address</strong> you used to register. Please provide this information on the secure Stripe checkout page. Your account will be upgraded promptly after we receive your order.</p>

      <h2>Frequently Asked Questions (FAQ) for Duolingo Super</h2>
      <div class="faq-accordion">
        <details>
          <summary>Will I keep my learning progress and streak?</summary>
          <div class="faq-content">
            <p>Yes, absolutely! We upgrade your <strong>existing Duolingo account</strong>, so your entire learning history, current streak, leaderboard rankings, and all achievements will remain exactly as they are.</p>
          </div>
        </details>
        <details>
          <summary>Can I purchase if my Duolingo trial or subscription is still active?</summary>
          <div class="faq-content">
            <p>To ensure a smooth upgrade, your account must not have an active subscription. Please wait for your current trial or plan to expire before purchasing. This is a requirement from Duolingo's system.</p>
          </div>
        </details>
        <details>
          <summary>How can I check my subscription status?</summary>
          <div class="faq-content">
            <p>You can check your status directly in the Duolingo app. Navigate to the Profile tab (face icon), tap the Settings gear icon (top right), and look for the "Subscription" section.</p>
          </div>
        </details>
        <details>
          <summary>What devices are supported?</summary>
          <div class="faq-content">
            <p>All of them. Your Duolingo Super subscription works seamlessly across all platforms where Duolingo is available: iOS (iPhone/iPad), Android, PC, Mac, and the web version.</p>
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
      { id: 'duo-12m', duration: '12 Months', price: 7.00, currency: 'USD', currencySymbol: '$', stripePriceId: 'REPLACE_WITH_DUOLINGO_12M_PRICE_ID' },
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
      <h2>Empower Your Productivity with Microsoft 365 Family</h2>
      <p>Unlock the full potential of your work and personal projects with a <strong>Microsoft 365 Family</strong> subscription. This is the ultimate package for productivity, creativity, and security, activated by joining our official Family plan via an invitation to your own Microsoft account.</p>

      <h3>Key Features of Microsoft 365 Family:</h3>
      <ul>
        <li><strong>Full Office Suite on Your Account:</strong> Access premium, always up-to-date versions of Word, Excel, PowerPoint, Outlook, and more, all linked to your personal Microsoft account.</li>
        <li><strong>Massive 1TB OneDrive Cloud Storage:</strong> Each user in the family group gets their own private <strong>1TB of OneDrive storage</strong>. Your files are yours alone, secure, and accessible from any device, anywhere.</li>
        <li><strong>Multi-Device Installation:</strong> Install and sign in to Office apps on up to 5 of your devices simultaneously, including Mac, PC, iPad, and mobile phones.</li>
        <li><strong>Advanced Security:</strong> Benefit from advanced security features in Outlook.com and OneDrive, such as ransomware detection and file recovery.</li>
      </ul>

      <h2>How to Join Our Family Plan</h2>
      <p>The process is incredibly simple and secure. After your purchase, please provide your <strong>Microsoft email address</strong> (e.g., your @outlook.com, @hotmail.com, or other associated email) on the secure Stripe checkout page. We will then send an official invitation from Microsoft for you to join our Family group. Simply accept the invitation, and all your premium benefits will be activated instantly on your account!</p>

      <h2>Frequently Asked Questions (FAQ) for Microsoft 365</h2>
      <div class="faq-accordion">
        <details>
          <summary>Is this a genuine Microsoft 365 subscription?</summary>
          <div class="faq-content">
            <p>Yes, this is 100% official and legitimate. You will be joining a Microsoft 365 Family plan via an official invitation sent directly from Microsoft to your own personal account.</p>
          </div>
        </details>
        <details>
          <summary>Are my OneDrive files private and secure?</summary>
          <div class="faq-content">
            <p>Absolutely. Although you are part of a Family group, each member's 1TB OneDrive cloud storage is completely separate and private. No one else in the group, including the administrator, can see or access your files.</p>
          </div>
        </details>
        <details>
          <summary>What if I already have a Microsoft subscription?</summary>
          <div class="faq-content">
            <p>If you have an existing Microsoft 365 Personal subscription, accepting the Family invitation will automatically convert your remaining time and add it to the new Family subscription, up to a maximum of 5 years. If you have a different type of subscription, you may need to let it expire first. Please <a href="/contact">contact us</a> if you have questions about your specific situation.</p>
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
      { id: 'ms-12m', duration: '12 Months', price: 9.90, currency: 'USD', currencySymbol: '$', stripePriceId: 'REPLACE_WITH_M365_12M_PRICE_ID' },
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

      <h3>Key Features of Our HBO Max Plan:</h3>
      <ul>
        <li><strong>Stunning 4K Ultra HD:</strong> Watch blockbuster movies and hit series in the highest resolution available for a truly immersive experience.</li>
        <li><strong>Private Sub-Account:</strong> You will be assigned your own profile within our premium account, ensuring your viewing experience is personal and separate.</li>
        <li><strong>Independent Watch History:</strong> Your recommendations, watch list, and "continue watching" section are yours and yours alone.</li>
        <li><strong>Unmatched Content Library:</strong> Home to all of HBO, a massive library of Warner Bros. movies, the DC Universe, and exclusive Max Originals you can't find anywhere else.</li>
      </ul>

      <h2>How It Works</h2>
      <p>The process is simple and fast. After you complete the payment, we will deliver the shared account login credentials and your dedicated profile details directly to the email address you provide during checkout.</p>

      <h2>Frequently Asked Questions (FAQ) for HBO Max</h2>
      <div class="faq-accordion">
        <details>
          <summary>Is this a private account?</summary>
          <div class="faq-content">
            <p>You will receive access to a <strong>private profile</strong> on a shared HBO Max account. This gives you your own separate space with an independent watch history and personalized recommendations.</p>
          </div>
        </details>
        <details>
          <summary>Can I set a PIN on my profile?</summary>
          <div class="faq-content">
            <p>Yes, HBO Max allows you to set a PIN for your profile to prevent others from accessing it. You can set this up in the "Profile & Parental Controls" section of your account settings after logging in.</p>
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
            <p>Our 24/7 customer support is here to help. If you ever encounter any issues, simply <a href="/contact">contact us</a>, and we will resolve it or provide a replacement promptly to ensure you don't miss out on your favorite shows.</p>
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
      { id: 'hbo-1m', duration: '1 Month', price: 5.00, currency: 'USD', currencySymbol: '$', stripePriceId: 'REPLACE_WITH_HBO_1M_PRICE_ID' },
      { id: 'hbo-3m', duration: '3 Months', price: 12.00, currency: 'USD', currencySymbol: '$', stripePriceId: 'REPLACE_WITH_HBO_3M_PRICE_ID' },
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