import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Silenzio's VitePress Site",
  base:"/A-Vitepress-Site/",
  description: "Under construction...",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'pandas_learning', link: '/pandas/索引、选择和赋值讲义' }
    ],
    sidebar: [
      {
        text: 'pandas_learning',
        items: [
          { text: '索引、选择和赋值', link: '/pandas/索引、选择和赋值讲义' },
          { text: 'One', link: '/test1/one' }]
      },
      {
        text: 'pandas_excercise',
        items: [
          { text: '索引、选择和赋值', link: '/pandas/索引、选择和赋值练习' },
          { text: 'One', link: '/test2/one' }]
      }
    ],
  
    socialLinks: [

      { icon: 'mian_site', link: 'https://silenzio111.github.io/' },
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
