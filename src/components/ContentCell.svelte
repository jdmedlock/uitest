<script>
  export let style = ''
  export let contentCell = {}

  const imgWidth = contentCell.width ? contentCell.width : 'w-1/2'
  const shadow = contentCell.shadow ? contentCell.shadow : 'drop-shadow-none'
</script>

{#if contentCell}
  {#if contentCell.type === 'text'}
    <div {style}>{contentCell.value ? contentCell.value : ''}</div>
  {:else}
    {#if contentCell.type === 'img'}
      <img class="{style} transform scale-125 md:scale-100 {imgWidth} m-4 z-50 rounded-xl {shadow}" src="{contentCell.value}" alt="cell">
    {/if}
  {/if}
{/if}