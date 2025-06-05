// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react"; // 如果你保留了 .tsx 组件，就需要这个

export default defineConfig({
  integrations: [
    react(), 
    tailwind()
  ],
  // site: 'https://YOUR_USERNAME.github.io', // 部署时再配置
  // base: '/YOUR_REPOSITORY_NAME',       // 部署时再配置
});