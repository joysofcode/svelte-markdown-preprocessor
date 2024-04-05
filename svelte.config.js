import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

import emoji from './src/lib/emoji.js'
import markdown from './src/lib/markdown.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), emoji(), markdown()],
	kit: {
		adapter: adapter(),
	},
}

export default config
