<script>
  import Settings from "./Settings.svelte";

  let settingsOpen = false;
</script>

<style>
  .min-h-64px {
    min-height: 64px;
  }
</style>

<div
  class="flex items-center h-16 min-h-64px px-8 py-4 bg-white border-b
  border-solid border-gray-300">
  <div class="w-4 text-3xl" />
  <div class="flex-1 text-center text-2xl font-rubik">Scrum Poker</div>
  <button
    class="w-4 text-3xl"
    on:click={() => {
      settingsOpen = true;
    }}>
    ⚙️
  </button>
</div>
{#if settingsOpen}
  <Settings
    onClose={() => {
      settingsOpen = false;
    }} />
{/if}
