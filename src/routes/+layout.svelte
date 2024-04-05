<svelte:head>
	<title>Svelte Preprocessors</title>
</svelte:head>

<main>
	<slot />
</main>

<style>
	:global(*) {
		margin: 0px;
		padding: 0px;
	}

	:global(body) {
		height: 100svh;
		display: grid;
		place-content: center;
		font-size: 2rem;
		font-family: sans-serif;
		color: oklch(100% 0 0);
		background-color: oklch(23.66% 0.02 271.79);
	}

	main {
		display: grid;
		place-items: center;
	}
</style>
