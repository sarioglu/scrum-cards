<script>
  export let onClose = () => {}
</script>

<style>
  div {
    width: 100vw;
    height: 100vh;

    position: absolute;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    z-index: 999;
  }
</style>

<div on:click={() => onClose()}>
  <slot />
</div>
