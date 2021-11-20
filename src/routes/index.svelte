<script context="module">
	export const prerender = true;
</script>

<script>
	import Highlight from '../containers/Highlight.svelte';
</script>

<svelte:head>
	<title>Chingu UITest</title>
</svelte:head>

<section class="flex-1 flex-col justify-center text-center">
	<h1 class="text-bold text-3xl">
		Welcome to my UI prototype
	</h1>
	
	<p class="mt-8 text-2xl">
		This is where I'm testing some ideas for a new Chingu.io website.
	</p>

	<p class="mb-12 text-2xl">
		It's where the magic happens
	</p>

	<div class="flex flex-col justify-center">
		<Highlight
			config={{
				rotate: 'left',
				bgColor: 'bg-green-200',
				cardConfig: {
					tagLines: {
						line1: "Transform what you learn...",
						line2: "into Experience to get Jobs!!!",
					},
					textLines: { 
						line1: 'Level-up technical + soft skills',
						line3: 'Learn with & from other Developers',
						line7: 'Build experience to get jobs!!!',
					}, 
					imageURL: '/assets/kelly-sikkema-A3XL3jDki70-unsplash.jpeg',
				},
				quoteConfig: {
					bgColor: 'bg-green-500',
					quote: '"This is one awesome quote"...Alfred E. Newman'
				},
			}}>
		</Highlight>

		<Highlight
			config={{
				rotate: 'right',
				bgColor: 'bg-red-200',
				cardConfig: {
					tagLines: {
						line1: "Transform what you learn...",
						line2: "into Experience to get Jobs!!!",
					},
					textLines: { 
						line1: 'Level-up technical + soft skills',
						line3: 'Learn with & from other Developers',
						line7: 'Build experience to get jobs!!!',
					}, 
					imageURL: '/assets/kelly-sikkema-A3XL3jDki70-unsplash.jpeg',
				},
				quoteConfig: {
					bgColor: 'bg-red-500',
					quote: '"This is one awesome quote"...Alfred E. Newman'
				},
			}}>
		</Highlight>
	</div>
</section>
