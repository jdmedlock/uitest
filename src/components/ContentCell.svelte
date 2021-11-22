<script>
  export let style = ''
  export let contentCell = {}

  const bgColor = contentCell.bgColor ? contentCell.bgColor : ''
  const imgWidth = contentCell.width ? contentCell.width : 'w-1/2'
  const shadow = contentCell.shadow ? contentCell.shadow : 'drop-shadow-none'
</script>

{#if contentCell}
  {#if contentCell.type === 'text'}
    <div {style}>{contentCell.value ? contentCell.value : ''}</div>
  {:else}
    {#if contentCell.type === 'img'}
      <img class="{style} {imgWidth} {bgColor} rounded-xl {shadow}" src="{contentCell.value}" alt="cell">
    {/if}
  {/if}
{/if}