function emoji() {
	return {
		name: 'emoji',
		markup: ({ content }) => ({ code: content.replaceAll('🔥', 'fire') }),
		script: ({ content }) => ({ code: content.replaceAll('🔥', 'fire') }),
	}
}

export default emoji
