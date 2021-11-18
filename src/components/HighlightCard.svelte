<script>
	import CallToAction from '../components/CallToAction.svelte'
	import Quote from '../components/Quote.svelte'

  export let rotate = 'even'
  export let tagLines = []
  export let text = {}
  export let imageURL = ''
  export let quote = ''

  let rotation
  switch (rotate) {
    case 'left':
      rotation = 'transform -rotate-2'
      break
    case 'right':
      rotation = 'transform rotate-2'
      break
    default:
      rotation = ''
      break
  } 

</script>

<div class="flex-none w-2/3 h-full place-self-center">
  <div class="{rotation} drop-shadow-2xl">
    <!-- Tag lines -->
    <div>
      <div class="text-black font-bold text-3xl text-left">{tagLines[0]}</div>
      <div class="text-green-700 font-bold text-3xl text-right">{tagLines[1]}</div>
    </div>

    <!-- Background card image -->
    <div class="bg-green-200 rounded-xl">

      <!-- Content overlaying the card -->
      <div class="flex-none grid-rows-3 gap-4">
        <!-- Row #1-->
        <div class="flex w-full row-start-1 grid-cols-3 justify-evenly place-items-center text-center">
          <div class="col-start-1 text-black text-3xl m-4">{text.line1}</div>
          <div class="col-start-2 text-black text-3xl m-4">{text.line2}</div>
          <div class="col-start-3 text-black text-3xl m-4">{text.line3}</div>
        </div>
        <!-- Row #2 -->
        <div class="flex w-full row-start-2 grid-cols-3 justify-evenly place-items-center text-center">
          <div class="col-start-1 text-black text-3xl m-4">{text.line4}</div>
          <img class="col-start-2 w-1/2 m-4 z-50 rounded-xl shadow-2xl" src="{imageURL}" alt="Woman coding">
          <div class="col-start-3 text-black text-3xl m-4">{text.line5}</div>
        </div>
        <!-- Row #3 -->
        <div class="flex w-full row-start-2 grid-cols-3 justify-evenly place-items-center text-center">
          <div class="col-start-1 text-black text-3xl m-4">{text.line6}</div>
          <div class="col-start-2 text-black text-3xl m-4">{text.line7}</div>
          <div class="col-start-3 text-black text-3xl m-4">{text.line8}</div>
        </div>
      </div>
    
      <div class="bg-green-200 rounded-xl pt-0 pb-8 pl-8 ">
        <Quote {quote}></Quote>
        <CallToAction></CallToAction>
      </div>
    
    </div>
  </div>

</div>
