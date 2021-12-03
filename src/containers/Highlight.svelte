<script>
	import HighlightCard from '../components/HighlightCard.svelte'

	export let config

	let { rotate, bgColor, cardConfig, quoteConfig } = config
</script>

<HighlightCard {rotate} {bgColor} {cardConfig} {quoteConfig}></HighlightCard>
