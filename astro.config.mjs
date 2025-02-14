// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';
import starlightSiteGraph from 'starlight-site-graph';
import starlightDocSearch from '@astrojs/starlight-docsearch';
import starlightThemeObsidian from 'starlight-theme-obsidian';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [
				starlightImageZoom({
					// Configuration options go here.
				}),
				starlightSiteGraph(),
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
							],
						},
					],
				},
				{
					label: 'BetaCube',
					items: [
						{
							label: 'РП',
							items: [
								{ label: 'РП', slug: 'main/rp' },
								{ label: 'Нарушения', slug: 'main/turma' },
							],
						},
					],
				},
			],
		}),
	],
});