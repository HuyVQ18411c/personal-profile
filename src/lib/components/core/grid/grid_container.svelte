<script>
    import GridItem from "./grid_item.svelte";
    export let content;
</script>

<div class="grid" style="justify-items: center;">
    {#each content as item }
        <GridItem item={item}>
        </GridItem>
    {/each}
</div>