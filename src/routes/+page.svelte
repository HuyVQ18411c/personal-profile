<script>
    import { MailIcon, LinkedInIcon } from "$lib/components/icons";
    import { Header, SplitContainer, TimeLine, Spacing, ContactInfo } from "$lib/components/core";
    import { getResource } from "$lib/services/data";
</script>
<div class="container center flex-column height-max">
    <div>
        <h1>Hi! I'm Huy</h1>
        <p>A developer who enthusiastic about <u>Design System</u></p>
    </div>
    <ContactInfo/>
    <button><a href="#education">Who am I?</a></button>
</div>

<div id="education" class="container height-max">
    <SplitContainer>
        <div slot="leftContent" class="flex-row center">
            <img src="images/graduation.jpg" alt="">
        </div>
        <div slot="rightContent" class="flex-column">
            <Header title="Education" description="University of Economics and Law"/>
            <Spacing bottomSpace="0px" topSpace="30px"/> 
            <div class="flex-column" style="row-gap: 15px;">
                {#await getResource("educationInfo")}
                    <p>Waiting</p>
                {:then educationInfo} 
                    {#each educationInfo as { title, description }}
                        <div>
                            <b>{title}: </b><span>{description}</span>
                        </div>
                    {/each}
                {/await}
            </div>
        </div>
    </SplitContainer>
</div>

<div id="experience" class="container height-max">
    <Header title="My Experience" description="A little bit workaholic" className="center"/>
    <Spacing bottomSpace="60px" topSpace="30px"/>
    {#await getResource("myExperiences")}
        <p>Waiting</p>
    {:then myExperiences} 
        <TimeLine myExperiences={myExperiences}/>
    {/await}
    <Spacing bottomSpace="60px" topSpace="30px"/>    
    <div class="center">
        <button><a href="/skills">Find out about my skills</a></button>
    </div>
</div>