<script>
  export let number
</script>

<style>
  .card {
    background-color: white;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border-radius: 0.5rem;

    font-size: 6rem;
    font-weight: bold;

    transition: box-shadow 200ms ease-in;
  }

  .card:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
</style>

<button class="card">{number}</button>
