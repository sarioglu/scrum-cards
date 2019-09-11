<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  const close = () => dispatch('close')
</script>

<style>
  .backdrop {
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
  }
</style>

<div class="w-screen h-screen absolute overflow-hidden z-50 backdrop" on:click={close}>
  <div on:click|stopPropagation={() => {}}>
    <slot />
  </div>
</div>
