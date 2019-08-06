<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  const select = () =>
    dispatch('select', {
      number,
    })

  export let number
  export let selected = false
  export let show = true
</script>

<style>
  .card {
    background-color: white;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border-radius: 0.5rem;

    font-family: 'Rubik', sans-serif;
    font-size: 3rem;
    font-weight: 500;

    transition: box-shadow 200ms ease-in;
  }

  .card:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  .selected {
    font-size: 10rem;
  }

  .selected.hide {
    color: transparent;
  }
</style>

<button class={`card ${selected ? 'selected' : ''} ${show ? '' : 'hide'}`} on:click={select}>{number}</button>
