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
						line1: "We help Developers like you",
						line2: "...get jobs at leading companies!!!",
					},
					textLines: { 
						line7: '',
					}, 
					imageURL: '/assets/cytonn-photography-n95VMLxqM2I-unsplash.jpeg',
				},
				quoteConfig: {
					bgColor: 'bg-red-500',
					quote: '"This is one awesome quote"...Alfred E. Newman'
				},
			}}>
		</Highlight>

		<Highlight
		config={{
			rotate: 'left',
			bgColor: 'bg-blue-200',
			cardConfig: {
				tagLines: {
					line1: "Join Developers like yourself",
					line2: "...who share your goals & determination!!!",
				},
				textLines: { 
					line2: 'Participate in a friendly & supportive community',
					line6: 'Gain experience in a remote team',
					line8: 'Level up with skills like Collaboration, Agile, & Pair Programming',
				}, 
				imageURL: '/assets/jason-goodman-Oalh2MojUuk-unsplash.jpeg',
			},
			quoteConfig: {
				bgColor: 'bg-blue-500',
				quote: '"This is one awesome quote"...Alfred E. Newman'
			},
		}}>
	</Highlight>

	<Highlight
		config={{
			rotate: 'right',
			bgColor: 'bg-yellow-200',
			cardConfig: {
				tagLines: {
					line1: "Build Development experience",
					line2: "...employers want and need!!!",
				},
				textLines: { 
					line1: 'Sign up & join our Developer Community',
					line3: 'Create a Solo Project & get valuable feedback',
					line4: 'Join a 6-week remote team project',
					line5: 'Build experience for the workplace',
					line6: 'Complete your team project to earn a certificate',
					line8: 'Repeat to level up even more!',
				}, 
				imageURL: '/assets/annie-spratt-QckxruozjRg-unsplash.jpeg',
			},
			quoteConfig: {
				bgColor: 'bg-yellow-500',
				quote: '"This is one awesome quote"...Alfred E. Newman'
			},
		}}>
	</Highlight>

	</div>
</section>
