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
      { text: 'pandas_learning', link: '/pandas/desc' }
    ],
    sidebar: [
      {
        text: 'Pandas learning & practise',
        items: [
          
          { text: '索引、选择和赋值', link: '/pandas/索引、选择和赋值讲义' },
          { text: 'Practise01', link: '/pandas/索引、选择和赋值练习' }]
      },
      {
        text: 'pandas_excercise',
        items: [
          { text: 'One', link: '/test2/one' }]
      }
    ],
  
    socialLinks: [

      { icon: '主站', link: 'https://silenzio111.github.io/' },
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
