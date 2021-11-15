<script context="module">
	export const prerender = true;
</script>

<script>
	import Highlight from '../containers/Highlight.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>
		Welcome to my UI prototype
	</h1>
	<p>
		This is where I'm testing some ideas for a new Chingu.io website.
	</p>
</section>

<section>
	<h2>This is where the magic happens</h2>
	<Highlight>
	</Highlight>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

</style>
