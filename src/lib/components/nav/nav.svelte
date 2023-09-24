<script>
    const navPages = [
        {title: 'About me', link: '/'},
        {title: 'Skills', link: '/skills'},
    ];
</script>

<nav>
    {#each navPages as { title, link }}
    <ul>
        <li><a href="{link}">{ title }</a></li>
    </ul>
    {/each}
</nav>
