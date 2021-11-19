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

	<h2 class="mb-12">This is where the magic happens</h2>
	<Highlight 
		config={{
			rotate: 'left',
			cardConfig: {
				tagLines: {
					line1: "Transform what you learn...",
					line2: "into Experience to get Jobs!!!",
				},
				textLines: { 
					line1: 'Level-up technical + soft skills',
					line2: '',
					line3: 'Learn with & from other Developers',
					line4: '',		
					line5: '',
					line6: '',
					line7: 'Build experience to get jobs!!!',
					line8: '',
				}, 
				imageURL: '/assets/kelly-sikkema-A3XL3jDki70-unsplash.jpeg',
			},
			quoteConfig: {
				quote: '"This is one awesome quote"...Alfred E. Newman'
			},
		}}>
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
