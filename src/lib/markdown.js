import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { parse } from 'svelte/compiler'
import { unified } from 'unified'

async function markdownToHtml(string) {
	return (
		unified()
			// turn Markdown into mdast
			.use(remarkParse)
			// turn mdast (Markdown) into hast (HTML)
			.use(remarkRehype, { allowDangerousHtml: true })
			// turn hast (HTML) into HTML string to render
			.use(rehypeStringify, { allowDangerousHtml: true })
			.process(string)
	)
}

async function html(content) {
	const svast = parse(content)
	const { start, end } = svast.html
	const string = content.slice(start, end)
	const html = await markdownToHtml(string)

	return {
		code: content.replace(string, html),
	}
}

function markdown() {
	return {
		name: 'markdown',
		markup({ content, filename }) {
			if (filename.endsWith('.md')) {
				return html(content)
			}
		},
	}
}

export default markdown
