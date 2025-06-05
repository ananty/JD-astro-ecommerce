/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'], // 确保这个路径正确
  darkMode: 'class', // 启用基于 class 的暗黑模式 (我们正在使用)
  theme: {
    extend: {
      // 你可以在这里扩展 Tailwind 的默认主题，例如添加自定义颜色、字体等
      colors: {
        primary: { // 定义我们之前在 CSS 变量中提到的主色调
          '50': '#eff6ff',
          '100': '#dbeafe',
          '200': '#bfdbfe',
          '300': '#93c5fd',
          '400': '#60a5fa',
          '500': '#3b82f6', // 我们的 --color-primary
          '600': '#2563eb',
          '700': '#1d4ed8',
          '800': '#1e40af',
          '900': '#1e3a8a',
          '950': '#172554',
        },
        // 你也可以在这里定义 secondary 等颜色
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // (可选) 如果你想使用 Tailwind 的排版插件优化文章/Markdown 内容样式
    // require('@tailwindcss/forms'), // (可选) 如果你有表单并想使用 Tailwind 的表单美化插件
  ],
}