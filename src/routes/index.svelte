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
						line1: 'Transform what you learn...',
						line2: 'into Experience to get Jobs!!!',
					},
					content: { 
						cell1: {type: 'text', value: 'Level-up technical + soft skills'},
						cell3: {type: 'text', value: 'Learn with & from other Developers'},
						cell5: {type: 'img', value: '/assets/kelly-sikkema-A3XL3jDki70-unsplash.jpeg', shadow: 'drop-shadow-2xl'},
						cell8: {type: 'text', value: 'Build experience to get jobs!!!'},
					}, 
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
					content: { 
						cell1: {type: 'img', value: '/assets/amazon-dark.svg', width: 'w-1/4'},
						cell3: {type: 'img', value: '/assets/f_logo_RGB-Blue_250.png', width: 'w-1/5'},
						cell4: {type: 'img', value: '/assets/intel-logo.png', width: 'w-1/4'},
						cell5: {type: 'img', value: '/assets/cytonn-photography-n95VMLxqM2I-unsplash.jpeg', shadow: 'drop-shadow-2xl'},
						cell6: {type: 'img', value: '/assets/LI-In-Bug.png', width: 'w-1/5', bgColor: 'bg-white'},
						cell7: {type: 'img', value: '/assets/microsoft-logo.png', width: 'w-2/5'},
						cell9: {type: 'img', value: '/assets/redhat-logo.png', width: 'w-2/5'},
					}, 
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
				content: { 
					cell2: {type: 'text', value: 'Participate in a friendly & supportive community'},
					cell5: {type: 'img', value: '/assets/jason-goodman-Oalh2MojUuk-unsplash.jpeg', shadow: 'drop-shadow-2xl'},
					cell7: {type: 'text', value: 'Gain experience in a remote team'},
					cell9: {type: 'text', value: 'Level up with skills like Collaboration, Agile, & Pair Programming'},
				}, 
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
				content: { 
					cell1: {type: 'text', value: 'Sign up & join our Developer Community'},
					cell3: {type: 'text', value: 'Create a Solo Project & get feedback'},
					cell4: {type: 'text', value: 'Join a remote team project'},
					cell5: {type: 'img', value: '/assets/annie-spratt-QckxruozjRg-unsplash.jpeg', shadow: 'drop-shadow-2xl'},
					cell6: {type: 'text', value: 'Build experience for the workplace'},
					cell7: {type: 'text', value: 'Earn a certificate for your team project'},
					cell9: {type: 'text', value: 'Repeat to level up even more!'},
				}, 
			},
			quoteConfig: {
				bgColor: 'bg-yellow-500',
				quote: '"This is one awesome quote"...Alfred E. Newman'
			},
		}}>
	</Highlight>

	</div>
</section>
