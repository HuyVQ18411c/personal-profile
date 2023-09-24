<script>
	import TimeContainer from './time_container.svelte';
    export let myExperiences;
</script>

<div class="timeline">
	{#each myExperiences as experience}
		{#if experience.id % 2 == 1}
			<TimeContainer direction='left' experience={experience}/>
		{:else}
			<TimeContainer direction='right' experience={experience}/>
		{/if}
	{/each}
</div>

<style>
	@import '/styles/timeline.css';
</style>
