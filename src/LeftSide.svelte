<script>
  import Contact from './Contact.svelte'
  import Toolbox from './Toolbox.svelte'
  import Education from './Education.svelte'
</script>

<div class="left-side">
  <Contact />
  <Toolbox />
  <Education />
</div>

<style>
  .left-side {
    min-height: 0;
    min-width: 0;
    height: 100%;
    grid-area: left;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto 1fr;
    grid-template-areas: 'contact' 'toolbox' 'education';
    row-gap: 1rem;
  }
</style>
