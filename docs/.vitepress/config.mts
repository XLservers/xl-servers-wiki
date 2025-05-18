import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "xl servers",
  description: "Лучший из тыйсячи!",
  head: [["link", { rel: "icon", href: "/paintings/home-icon.svg" }]],
  base: process.env.BASE_URL || '/',
  themeConfig: {
    footer: {
      message:
          'Not an official Minecraft product. We are in no way affiliated with or endorsed by Mojang Synergies AB, Microsoft Corporation or other rightsholders.',
      copyright:
          "&copy; 2024 - " +
          new Date().getFullYear() +
          ' <a href="https://shop.xlservers.ru">xl servers copyright</a>',
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Discord-сообщество', link: 'https://discord.com/invite/uTVVsn5b6j' },
      { text: 'Онлайн карта сервера', link: '/errorpage/' },
      { text: 'Магазин', link: 'https://shop.xlserver.ru' },
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
