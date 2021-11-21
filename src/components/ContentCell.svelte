<script>
  export let style = ''
  export let contentCell = {}
</script>

{#if contentCell}
  {#if contentCell.type === 'text'}
    <div {style}>{contentCell.value ? contentCell.value : ''}</div>
  {:else}
    {#if contentCell.type === 'img'}
      <img class="{style} transform scale-125 md:scale-100 w-1/2 m-4 z-50 rounded-xl shadow-2xl" src="{contentCell.value}" alt="cell image">
    {/if}
  {/if}
{/if}