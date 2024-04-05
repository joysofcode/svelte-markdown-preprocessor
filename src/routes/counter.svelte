<script>
	let count = 0
	const increment = () => count++
</script>

<button on:click={increment}>
	Count: {count}
</button>

<style>
	button {
		margin-block-start: 1rem;
		padding: 0.5rem 1rem;
		border-radius: 8px;
		border: none;
	}
</style>
