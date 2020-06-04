<script>
  import Label from './Label.svelte'
  import ProjectItem from './ProjectItem.svelte'
  import ProjectsData from './projectsData.js'
  const projectsData = ProjectsData()
</script>

<section>
  <Label text="Projects" />
  <ul>
    {#each projectsData as project}
      <ProjectItem project="{project}" />
    {/each}
  </ul>
</section>

<style>
  section {
    grid-area: right;
    min-height: 0;
    min-width: 0;
    position: relative;
  }
  ul {
    padding: 0;
    padding-left: 0.5rem;
  }
</style>
