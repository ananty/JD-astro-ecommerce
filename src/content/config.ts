// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// 定义 Gallery 集合
const galleryCollection = defineCollection({
  type: 'content', // 'content' 表示这是 Markdown/MDX 文件
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    // Astro 的图片处理功能，可以优化图片并提供类型安全
    // 它要求图片文件与 Markdown 文件一起放在 `src/content/` 目录下
    // 为了简单，我们先用字符串路径，图片放在 `public` 目录下
    pinterestImage: z.string(), 
    author: z.string().optional(), // 作者是可选的
    tags: z.array(z.string()).optional(), // 标签是可选的
  }),
});

// 导出所有集合
export const collections = {
  'gallery': galleryCollection,
};