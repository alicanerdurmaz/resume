<script>
  import AboutMe from './AboutMe.svelte'
  import LeftSide from './LeftSide.svelte'
  import Header from './Header.svelte'
  import RightSide from './RightSide.svelte'
</script>

<div class="resume">
  <Header />
  <AboutMe />
  <LeftSide />
  <RightSide />
</div>

<style>
  .resume {
    min-height: 0;
    min-width: 0;
    margin: 0 auto;
    height: 29.7cm;
    width: 21cm;
    display: grid;
    grid-template-columns: 240px 1fr;
    grid-template-rows: 2rem auto 1fr;
    row-gap: 1rem;
    column-gap: 96px;
    grid-template-areas: 'header header' 'aboutme aboutme' 'left right';
  }
</style>
