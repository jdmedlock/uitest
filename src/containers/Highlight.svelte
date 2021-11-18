<script>
	import HighlightCard from '../components/HighlightCard.svelte'

	export let rotate
	export let tagLines
	export let text
	export let imageURL
	export let quote

</script>

<HighlightCard {rotate} {tagLines} {text} {imageURL} {quote}></HighlightCard>


