<script>
  import Settings from './Settings.svelte'

  let settingsOpen = false
</script>

<style>
  .app-bar {
    display: flex;
    align-items: center;
    height: 4rem;
    min-height: 64px;
    padding: 1rem 2rem;

    background-color: #ffffff;
    border-bottom: 1px solid #e2e8f0;
  }

  .icon {
    width: 2rem;
    font-size: 2rem;
  }

  .title {
    flex: 1;

    text-align: center;
    font-family: 'Rubik', sans-serif;
    font-size: 1.5rem;
  }
</style>

<div class="app-bar">
  <div class="icon" />
  <div class="title">Scrum Poker</div>
  <button
    class="icon"
    on:click={() => {
      settingsOpen = true
    }}>
    ⚙️
  </button>
</div>
{#if settingsOpen}
  <Settings
    onClose={() => {
      settingsOpen = false
    }} />
{/if}
