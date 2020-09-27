<script lang="ts">
  import { onMount, onDestroy } from 'svelte'
  import { fly } from 'svelte/transition'

  import Card from './Card.svelte'
  import SelectedCard from './SelectedCard.svelte'
  import Backdrop from './Backdrop.svelte'

  import { currentCardSet } from '../store/cards'

  let selectedCard = ''
  let showCard = false
  let shakeEvent = null

  const selectCard = (event: CustomEvent<{ number: string }>) => {
    selectedCard = event.detail.number

    shakeEvent.start()
  }

  const resetSelection = () => {
    selectedCard = null
    showCard = false
  }

  const toggleShowCard = () => {
    debugger
    if (showCard) {
      resetSelection()
      shakeEvent.stop()
    } else {
      showCard = true
    }
  }

  onMount(async () => {
    const { default: Shake } = await import('shake.js')
    shakeEvent = new Shake({
      threshold: 5,
      timeout: 100,
    })

    window.addEventListener('shake', toggleShowCard, false)
  })

  // onDestroy(() => {
  //   window.removeEventListener('shake', toggleShowCard, false)
  // })
</script>

<style>
  .grid {
    display: grid;
  }

  .grid-gap-4 {
    grid-gap: 1rem;
  }

  .grid-col-3 {
    grid-template-columns: repeat(3, 1fr);
  }

  .perspective {
    perspective: 1000px;
  }
</style>

<div class="grid grid-gap-4 grid-col-3 container w-full mx-auto p-4 flex-1">
  {#each $currentCardSet as number}
    <Card {number} on:select={selectCard} />
  {/each}
</div>

{#if selectedCard}
  <Backdrop on:close={resetSelection}>
    <div class="grid absolute w-full h-full p-8 perspective" transition:fly={{ y: 300 }}>
      <SelectedCard number={selectedCard} show={showCard} on:close={toggleShowCard} />
    </div>
  </Backdrop>
{/if}
