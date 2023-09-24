<script>
    export let item;
</script>

<style>
    h4 {
        margin-bottom: 0px;
    }
    p {
        font-size: 1.2rem;
    }
</style>

<div class="grid-item center" title="{item.popUpTitle}">
    <h4>{item.title}</h4>
    <p>{item.description}</p>
</div>