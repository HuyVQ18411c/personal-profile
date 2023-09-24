<script>
    export let title;
    export let description = '';
    export let className = '';
    export let size = '';
</script>
<style>
    h2, h3, h4 {
        margin-bottom: 0px;
    }
    span {
        font-size: 1.2rem;
    }
</style>

<div class="{className}">
    {#if size == 'small'}
        <h4>{title}</h4>
    {:else if size == 'medium'}
        <h3>{title}</h3>
    {:else}
        <h2>{title}</h2>
    {/if}
    {#if description == ''}
    {:else}
        <span>{description}</span>
    {/if}
</div>