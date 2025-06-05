// src/data/reviewsData.ts

export interface Review {
  id: string;
  productName: string; // 被评论的产品名称
  productSlug?: string; // (可选) 产品slug，用于链接到产品页
  userName: string; // 用户昵称
  avatarUrl?: string; // (可选) 用户头像图片URL (可以使用占位符或真实图片)
  rating: number; // 评分 (1-5)
  title?: string; // (可选) 评论标题
  text: string; // 评论正文
  date: string; // 评论日期 (简单字符串格式)
  verifiedPurchase?: boolean; // (可选) 是否已验证购买
}

export const homepageReviews: Review[] = [
  {
    id: 'review-netflix-1',
    productName: 'Netflix Premium 4K',
    productSlug: 'netflix-premium-4k',
    userName: 'Alex P.',
    avatarUrl: '/images/avatars/avatar-1.png', // 请在 public/images/avatars/ 下准备占位头像
    rating: 5,
    title: 'Excellent Quality and Service!',
    text: "The 4K quality on Netflix is stunning, and the separate account feature is great for my family. Setup was super easy. Jaideepas made it affordable!",
    date: 'October 26, 2023',
    verifiedPurchase: true,
  },
  {
    id: 'review-duolingo-1',
    productName: 'Duolingo Super',
    productSlug: 'duolingo-super',
    userName: 'Maria G.',
    avatarUrl: '/images/avatars/avatar-2.png',
    rating: 4,
    title: 'Great for Learning Languages',
    text: "Duolingo Super has been a fantastic tool for learning Spanish. No ads and unlimited hearts really make a difference. The subscription process was smooth.",
    date: 'November 02, 2023',
    verifiedPurchase: true,
  },
  {
    id: 'review-m365-1',
    productName: 'Microsoft 365',
    productSlug: 'microsoft-365',
    userName: 'John D.',
    avatarUrl: '/images/avatars/avatar-3.png',
    rating: 5,
    title: 'Essential for Productivity',
    text: "Microsoft 365 is indispensable for my work. Getting it through Jaideepas was straightforward and the 1TB OneDrive storage is a huge plus. Highly recommend!",
    date: 'November 10, 2023',
  },
  // 你可以根据需要添加更多评论
];
