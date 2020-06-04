<script>
  export let text
</script>

<div class="label-container">
  <h1 class="label">{text}</h1>
</div>

<style>
  .label-container {
    overflow: hidden;
    position: relative;
  }
  .label {
    font-size: 20px;
    font-family: 'Lato';
    font-weight: 700;
    position: relative;
    margin: 0px auto;
    padding: 0 8px;
    width: max-content;
    text-align: center;
    background: white;
  }
  .label-container::after {
    width: 100%;
    position: absolute;
    display: block;
    top: 0.6rem;
    content: '';
    border: 1px solid rgba(0, 0, 0, 0.4);
    z-index: -1;
  }
</style>
