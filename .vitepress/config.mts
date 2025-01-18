import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "spark",
    description: "只是一个知识文档网站",
    lang: "zh-CN",
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
        ],
    }
})
