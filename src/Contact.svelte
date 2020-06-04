<script>
  import Label from './Label.svelte'
</script>

<section>

  <Label text="Contact" />

  <nav class="contact-container">
    <span>
      <i class="fas fa-globe-europe"></i>
      <a target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/sSJkZ4hVwiXceWb76">Izmir, Turkey</a>
    </span>

    <span>
      <i class="fas fa-phone"></i>
      <a>0507 191 67 09</a>
    </span>

    <span>
      <i class="fas fa-envelope"></i>
      <a target="_blank" rel="noopener noreferrer" href="mailto:alicanerdurmaz@gmail.com">alicanerdurmaz@gmail.com</a>
    </span>

    <span>
      <i class="fas fa-home"></i>
      <a target="_blank" rel="noopener noreferrer" href="https://alicanerdurmaz.tech/">alicanerdurmaz.tech</a>
    </span>
    <span>
      <i class="fab fa-github"></i>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/alicanerdurmaz">alicanerdurmaz</a>
    </span>
    <span>
      <i class="fab fa-twitter"></i>
      <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/alicanerdurmazz">alicanerdurmazz</a>
    </span>
    <span>
      <i class="fab fa-linkedin"></i>
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alicanerdurmaz/">alicanerdurmaz</a>
    </span>
  </nav>
</section>

<style>
  section {
    grid-area: contact;
  }

  .contact-container {
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }
  span {
    margin: 0.5rem 0rem;
  }
  a {
    margin-left: 0.5rem;
  }
</style>
