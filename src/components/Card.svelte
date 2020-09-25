<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher<{ select: { number: string } }>()

  const select = () =>
    dispatch('select', {
      number,
    })

  export let number = ''
</script>

<button
  class="bg-white shadow-md rounded-lg transition hover:shadow-lg font-rubik text-5xl font-medium"
  on:click={select}>
  {number}
</button>
