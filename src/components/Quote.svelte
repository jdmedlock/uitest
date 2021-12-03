<script>
  export let rotate
  export let quoteConfig

  const marginAmt = rotate === 'left' ? '-mr-12 lg:-mr-20' : '-ml-6 lg:-ml-20'
</script>

<div class="w-11/12">
  <div class="m-4 {marginAmt}">
    <div class="{quoteConfig.bgColor} text-white text-2xl md:text-4xl rounded-tl-xl rounded-br-xl border-solid border-4">
      <div class="m-4">{quoteConfig.quote}</div>
    </div>
  </div>
</div>