<script>
  import Label from './Label.svelte'
</script>

<section>
  <Label text="Toolbox" />
  <div>
    <ul class="list-container left">
      <li class="list-item">Javascript</li>
      <li class="list-item">Typescript</li>
      <li class="list-item">React</li>
      <li class="list-item">Svelte</li>
      <li class="list-item">C/C++</li>
    </ul>
    <ul class="list-container right">
      <li class="list-item">C#</li>
      <li class="list-item">Firebase</li>
      <li class="list-item">NodeJs</li>
      <li class="list-item">GraphQL</li>
      <li class="list-item">HTML/CSS</li>
    </ul>
  </div>
</section>

<style>
  section {
    grid-area: toolbox;
  }
  div {
    display: flex;
    flex-direction: row;
  }
  .list-container {
    list-style-type: disc;
    width: 50%;
    /* margin: 0 auto; */
    margin-top: 0.5rem;
  }
  .list-item {
    margin: 0.5rem 0;
    list-style-position: inside;
  }
</style>
