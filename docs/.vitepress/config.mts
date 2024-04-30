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
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }]
      },
      {
        text: 'pandas',
        items: [
          { text: '入门', link: '/pandas/入门' },
          { text: 'One', link: '/test1/one' }]
      },
      {
        text: 'test_sub2_test',
        items: [
          { text: 'Index', link: '/test2/index' },
          { text: 'One', link: '/test2/one' }]
      }
    ],
  
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'mian_site', link: 'https://silenzio111.github.io/' }
    ]
  }
})
