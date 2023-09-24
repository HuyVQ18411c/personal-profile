<script>
	import { Header } from "$lib/components/core";

	export let direction = 'left';
	export let experience;
</script>

<style>
	h3 {
		margin-bottom: 0px;
	}
</style>

<div class="time-container {direction}">
	<div class="content">
		<Header size="medium" title="{experience.company}" description="{experience.job} - {experience.timeline}"/>
		<p>{experience.description}</p>
	</div>
</div>
