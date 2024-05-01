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
          { text: '创建、读取和写入', link: '/pandas/创建、读取和写入讲义' },
          { text: 'Practise01', link: '/pandas/创建、读取和写入练习' },
          { text: '索引、选择和赋值', link: '/pandas/索引、选择和赋值讲义' },
          { text: 'Practise02', link: '/pandas/索引、选择和赋值练习' }]
      },
      {
        text: '基于python的中级计量经济学',
        items: [
          { text: 'Vue3.0', link: '/vue/vue3.0' },
          { text: 'Vue2.0', link: '/vue/vue2.0' }
        ]
      }
    ],
  
    socialLinks: [

      { icon: '主站', link: 'https://silenzio111.github.io/' },
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
