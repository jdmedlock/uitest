<script>
	import HighlightCard from '../components/HighlightCard.svelte'

	export let config

	let { rotate, cardConfig, quoteConfig } = config
</script>

<HighlightCard {rotate} {cardConfig} {quoteConfig}></HighlightCard>
