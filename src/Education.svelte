<script>
  import Label from './Label.svelte'
</script>

<section>
  <Label text="Education" />
  <div class="item">
    <h1 class="date">2018 - 2022 ∣ Bachelor of Science</h1>
    <h1 class="school">Dokuz Eylul University</h1>
    <h1>Computer Science</h1>
  </div>
  <div class="item">
    <h1 class="date">2016 - 2018 | Associate's Degree</h1>
    <h1 class="school">Celal Bayar University</h1>
    <h1>Computer Programming</h1>

  </div>
</section>

<style>
  section {
    grid-area: education;
  }
  .item {
    line-height: 1.2;
    margin: 1rem 0;
  }
  .date {
    font-weight: 400;
    width: 110%;
  }
</style>
