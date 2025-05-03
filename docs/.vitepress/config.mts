import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "xl servers",
  description: "Лучший из тыйсячи!",
  head: [["link", { rel: "icon", href: "/paintings/home-icon.svg" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Discord-сообщество', link: 'https://discord.com/invite/uTVVsn5b6j' },
      { text: 'Онлайн-карта', link: '/errorpage' },
      { text: 'Магазин', link: 'https://xlservers.easydonate.ru/' },
    ],

    sidebar: [
      { text: 'Добро пожаловать👋', link: '/hello' },
      { text: '⚡ Начать играть', link: '/play' },
      {
        text: 'Основы сервера',
        items: [
          { 
           text: '📖 Правила', 
           link: '/rules',
           items: [
             { text: '📜 Конституция', link: '/main/constitytion' },
           ],
          },
          { text: '🎓 Новичкам', link: '/main/welcomeplayer' },
          { text: '🧪 Фитчи', link: '/main/additions' },
          { text: '⚙️ Команды', link: '/main/commands' },
          { text: '✨ Дополнения', link: '/main/dops' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.com/invite/zFkXA9ETq5' },
      { icon: 'github', link: 'https://github.com/XLservers' }
    ]
  }
})
