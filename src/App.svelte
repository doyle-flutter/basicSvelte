<script>
	export let name;
	export let logo;
	export let github;
	export let ko;
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>{ko}</p>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<div><a href="{github}"><img src="{logo}" alt="logo"></a></div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>