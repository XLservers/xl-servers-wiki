// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';
import starlightSiteGraph from 'starlight-site-graph';
import starlightDocSearch from '@astrojs/starlight-docsearch';
import starlightThemeObsidian from 'starlight-theme-obsidian';
import starlightBlog from 'starlight-blog'
import starlightSidebarTopics from 'starlight-sidebar-topics';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [
				starlightImageZoom({
					// Configuration options go here.
				}),
				starlightSiteGraph(),
				starlightBlog(),
			],
			title: 'XL-servers',
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
			social: {
				github: 'https://github.com/XLservers/xl-servers-wiki',
			},
			sidebar: [
				{ label: '👋Добро пожаловать!', slug: 'hellothere' },
				{
					label: 'Общее',
					items: [
						{
							label: 'Правила',
							items: [
								{ label: 'Правила проекта', slug: 'all/rules' },
								{ label: 'Дополнительно', slug: 'all/additionrules' },
								{ label: 'Правила дискорд сервера', slug: 'all/discordrules' },
							],
						},
					],
				},
				{
					label: 'BetaCube | сезон 3',
					items: [
						{
							label: 'РП',
							items: [
								{ label: 'РП', slug: 'main/rp' },
								{ label: 'Нарушения', slug: 'main/turma' },
								{ label: 'Органы власти', slug: 'main/organsoflife' },
								{ label: 'Лицензии', slug: 'main/license' },
							],
						},
					],
				},
				{
					label: 'XL',
					items: [],
				},
			],
		}),
	],
});