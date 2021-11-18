<script>
	import CallToAction from '../components/CallToAction.svelte'
	import HighlightCard from '../components/HighlightCard.svelte'
	import Quote from '../components/Quote.svelte'

	export let config = {}

	const cardSettings = config.cardSettings !== undefined ? config.cardSettings : undefined
</script>

<HighlightCard></HighlightCard>


