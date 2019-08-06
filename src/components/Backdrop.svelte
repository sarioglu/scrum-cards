<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  const close = () => dispatch('close')
</script>

<style>
  .backdrop {
    width: 100vw;
    height: 100vh;

    position: absolute;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    z-index: 999;
  }
</style>

<div class="backdrop" on:click={close}>
  <div on:click|stopPropagation={() => {}}>
    <slot />
  </div>
</div>
