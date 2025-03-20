import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "XL-servers",
  description: "Лучший из тыйсячи!",
  head: [["link", { rel: "icon", href: "/paintings/server_planet0001.svg" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Discord-сообщество', link: 'https://discord.gg/zFkXA9ETq5' },
      { text: 'Онлайн-карта', link: 'http://xls-minecraft.ru:25574/' },
      { text: 'Магазин', link: 'https://xl-servers.easydonate.ru/' },
    ],

    sidebar: [
      { text: 'Добро пожаловать👋', link: '/hello' },
      { text: '⚡ Начать играть', link: '/play' },
      {
        text: 'BetaCube 3сезон',
        items: [
          { 
           text: '📖 Правила', 
           link: '/rules',
           items: [
             { text: '📜 Конституция', link: '/main/constitytion' },
           ],
          },
          { text: '🧪 Фитчи', link: '/main/additions' },
          { text: '⚙️ Команды', link: '/main/commands' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.com/invite/zFkXA9ETq5' },
      { icon: 'github', link: 'https://github.com/XLservers' }
    ]
  }
})
