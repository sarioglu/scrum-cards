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

<button
  class="bg-white shadow-md rounded-lg transition hover:shadow-lg font-rubik text-5xl font-medium"
  on:click={select}>
  {number}
</button>
