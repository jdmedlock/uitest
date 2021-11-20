<script>
	import CallToAction from '../components/CallToAction.svelte'
	import Quote from '../components/Quote.svelte'

  export let rotate = 'even'
  export let bgColor = 'bg-green-200'
  export let cardConfig = {}
  export let quoteConfig = {}

  const tagLines = cardConfig.tagLines
  const imageURL = cardConfig.imageURL
  const textLines = cardConfig.textLines

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

<div class="flex-none w-full lg:w-2/3 h-full place-self-center m-16">
  <div class="{rotation} drop-shadow-2xl">
    <!-- Tag lines -->
    <div class="mb-4">
      <div class="text-black font-bold text-2xl md:text-3xl text-left">{tagLines.line1}</div>
      <div class="text-green-700 font-bold text-2xl md:text-3xl text-right mt-2">{tagLines.line2}</div>
    </div>

    <!-- Background card image -->
    <div class="{bgColor} rounded-xl">

      <!-- Content overlaying the card -->
      <div class="flex-none grid-rows-3 gap-4">
        <!-- Row #1-->
        <div class="flex w-full row-start-1 grid-cols-3 justify-evenly place-items-center text-center text-black text-2xl md:text-3xl pt-2">
          <div class="col-start-1 m-4">{textLines.line1 ? textLines.line1 : ''}</div>
          <div class="col-start-2 m-4">{textLines.line2 ? textLines.line2 : ''}</div>
          <div class="col-start-3 m-4">{textLines.line3 ? textLines.line3 : ''}</div>
        </div>
        <!-- Row #2 -->
        <div class="flex w-full row-start-2 grid-cols-3 justify-evenly place-items-center text-center text-2xl md:text-3xl">
          <div class="col-start-1 text-black m-4">{textLines.line4 ? textLines.line4 : ''}</div>
          <img class="col-start-2 transform scale-125 md:scale-100 w-1/2 m-4 z-50 rounded-xl shadow-2xl" src="{imageURL}" alt="Woman coding">
          <div class="col-start-3 text-black m-4">{textLines.line5 ? textLines.line5 : ''}</div>
        </div>
        <!-- Row #3 -->
        <div class="flex w-full row-start-2 grid-cols-3 justify-evenly place-items-center text-center text-2xl md:text-3xl">
          <div class="col-start-1 text-black m-4">{textLines.line6 ? textLines.line6 : ''}</div>
          <div class="col-start-2 text-black m-4">{textLines.line7 ? textLines.line7 : ''}</div>
          <div class="col-start-3 text-black m-4">{textLines.line8 ? textLines.line8 : ''}</div>
        </div>
      </div>
    
      <div class="{bgColor} rounded-xl pt-0 pb-8">
        <Quote {quoteConfig}></Quote>
        <CallToAction></CallToAction>
      </div>
    
    </div>
  </div>

</div>
