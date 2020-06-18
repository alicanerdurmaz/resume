<script>
  import Label from './Label.svelte'
</script>

<section>
  <Label text="Hello" />
  <div>
    <p>When I wrote my first code, I realized I could tell computers what to do. I was fascinated.</p>
    <p>
      As soon as I decided to be a software engineer, I stared to study Associate's Degree in Computer Programming at
      Celal Bayar University. After finishing computer programming,
      <br />
      I started to study in Computer Science at Dokuz Eylul University. Now i'm in my second year of study.
    </p>
    <p>
      I wanted to develop games when I first started to programming. I was learning Unity and C#. Developing games is
      fun, it's a pleasure to deal with game math and writing high performance code. But it was not enough. I wanted to
      make people's lives easier with quality software.
      <br />
      So, i started to learn Frontend Development.
      <br />
      Especially in time of pandemic we realized that the world needs high quality software.
    </p>
    <p>
      Nowadays, My current focus on JAMStack with Modern Javascript frameworks. I love writing software to solve
      problems, I love open source software communities. Rapidly growing software ecosystem and new things to learn
      continuously makes me love this job more.
    </p>
  </div>
</section>

<style>
  section {
    grid-area: aboutme;
    min-height: 0;
    min-width: 0;
  }
  div {
    padding-top: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }
  p {
    margin: 8px 0;
    padding: 0;
    font-family: Lato;
    font-size: 1.225rem;
    line-height: 1.2;
  }
</style>
