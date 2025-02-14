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
				starlightDocSearch({
					appId: 'KXQEIP6432',
					apiKey: '687a2935e78b326c4f6f0d347a37336d',
					indexName: 'yep',
				}),
			],
			title: 'XL-servers',
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
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
					label: 'Основное',
					items: [
						{
							label: 'РП',
							items: [
								{ label: 'РП', slug: 'main/rp' },
							],
						},
					],
				},
			],
		}),
	],
});