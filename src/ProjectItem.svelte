<script>
  export let project
</script>

<li>
  <div class="header">
    <h1 class="name">{project.name}</h1>
    <div class="links">
      <a target="_blank" rel="noopener noreferrer" href="{project.links.github}">Github</a>
      {#if project.links.release}
        |
        <a target="_blank" rel="noopener noreferrer" href="{project.links.release.url}">
          {project.links.release.platformName}
        </a>
      {/if}
    </div>
  </div>

  <p class="slogan">{project.slogan}</p>
  {#if project.description}
    {#each project.description as description}
      <p class="description">{description}</p>
    {/each}
  {/if}

</li>

<style>
  li {
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
  }

  .header {
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: baseline;
  }
  h1 {
    display: inline-block;
    font-size: 20px;
    color: var(--text-dark);
  }
  .links {
    margin-left: 1rem;
  }
  a {
    color: var(--text-blue);
  }

  .slogan {
    font-weight: 300;
  }
  .description {
    margin-top: 0.5rem;
    font-family: Lato;
  }
</style>
