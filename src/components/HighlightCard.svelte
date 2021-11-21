<script>
	import CallToAction from '../components/CallToAction.svelte'
  import ContentCell from '../components/ContentCell.svelte'
	import Quote from '../components/Quote.svelte'

  export let rotate = 'even'
  export let bgColor = 'bg-green-200'
  export let cardConfig = {}
  export let quoteConfig = {}

  const tagLines = cardConfig.tagLines
  const content = cardConfig.content

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
      <div class="flex-none grid-rows-3">
        <!-- Row #1-->
        <div class="flex w-full row-start-1 grid-cols-3 justify-evenly place-items-center text-center text-black text-2xl md:text-3xl pt-4">
          <ContentCell style="col-start-1 m-4" contentCell={content.cell1}/>
          <ContentCell style="col-start-2 m-4" contentCell={content.cell2}/>
          <ContentCell style="col-start-3 m-4" contentCell={content.cell3}/>
        </div>
        <!-- Row #2 -->
        <div class="flex w-full row-start-2 grid-cols-3 justify-evenly place-items-center text-center text-black text-2xl md:text-3xl pt-4">
          <ContentCell style="col-start-1 m-4" contentCell={content.cell4}/>
          <ContentCell style="col-start-2 m-4" contentCell={content.cell5}/>
          <ContentCell style="col-start-3 m-4" contentCell={content.cell6}/>
        </div>
        <!-- Row #3 -->
        <div class="flex w-full row-start-3 grid-cols-3 justify-evenly place-items-center text-center text-black text-2xl md:text-3xl pt-4">
          <ContentCell style="col-start-1 m-4" contentCell={content.cell7}/>
          <ContentCell style="col-start-2 m-4" contentCell={content.cell8}/>
          <ContentCell style="col-start-3 m-4" contentCell={content.cell9}/>
        </div>
      </div>
    
      <div class="{bgColor} rounded-xl pt-0 pb-8">
        <Quote {quoteConfig}></Quote>
        <CallToAction></CallToAction>
      </div>
    
    </div>
  </div>

</div>
