// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react"; // 如果你保留了 .tsx 组件，就需要这个
import sitemap from "@astrojs/sitemap"; // 1. 导入 sitemap

export default defineConfig({
  integrations: [
    react(), 
    tailwind(), 
    sitemap() // 3. 添加 sitemap 集成
  ],
   site: 'https://www.jaideepass.com', // 部署时再配置
  // base: '/YOUR_REPOSITORY_NAME',       // 部署时再配置
});