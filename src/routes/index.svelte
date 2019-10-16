<script>
  import Tailwindcss from "../components/Tailwindcss.svelte";
  import AppBar from "../components/AppBar.svelte";
  import CardGrid from "../components/CardGrid.svelte";
</script>

<style>
  .wrapper {
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    justify-content: stretch;

    background-color: #edf2f7;
  }
</style>

<div class="wrapper">
  <Tailwindcss />
  <AppBar />
  <CardGrid />
</div>
