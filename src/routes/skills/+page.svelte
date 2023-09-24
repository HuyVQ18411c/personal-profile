<script>
	import { Header, GridContainer, Spacing, ContactInfo } from '$lib/components/core';
	async function getSkillsInfo() {
		const response = await fetch(
			'https://my-json-server.typicode.com/HuyVQ18411c/personal-profile-data/skillSections'
		);
		if (response.ok) {
			return await response.json();
		} else {
			throw new Error(response.statusText);
		}
	}
</script>

{#await getSkillsInfo()}
	<p>Fetching resources</p>
{:then skillSections}
	{#each skillSections as section}
		<div class="container">
			<Header
				className="center"
				size="medium"
				title={section.title}
				description={section.description}
			/>
			<hr />
			<Spacing bottomSpace="0px" topSpace="30px" />
			<GridContainer content={section.content} />
		</div>
		<Spacing bottomSpace="60px" topSpace="0px" />
	{/each}
{:catch}
	<p>Failed to load resources. Please try again.</p>
{/await}

<div class="container flex-row more-info" style="">
	<Header size="medium" title="Want to know more?" description="Grab my info!" />
    <div class="flex-row center item">
        <a href="https://drive.google.com/file/d/1Q7pHtWYCxo5JgPxbNP-wcBspK3wou1Fs/view?usp=sharing" target="_blank"><u>My resume</u></a>
        <Spacing leftSpace="15px"/>
        <span>or</span>
        <Spacing rightSpace="15px"/>
        <ContactInfo/>
    </div>
</div>

<style>
	.more-info {
		background-color: var(--secondary-bg-color);
		width: 70%;
		margin: auto;
		align-items: center;
        padding-bottom: 30px;
        justify-content: space-between;
        height: 100%;
	}

    .more-info .item {
        height: 100%;
        padding-top: 30px;
    }

    h3 {
        margin-top: 0px;
    }
</style>
