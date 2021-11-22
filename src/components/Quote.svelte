<script>
  export let quoteConfig
</script>

<div class=" w-screen place-self-center m-2 lg:m-4 -ml-4 lg:-ml-20">
  <div class="flex content-center">
    <div class="{quoteConfig.bgColor} text-white text-2xl md:text-4xl rounded-tl-xl rounded-br-xl border-solid border-2 border-gray-400">
      <div class="m-4">{quoteConfig.quote}</div>
    </div>
  </div>
</div>