<script>
  import { fly } from 'svelte/transition'

  import Card from './Card.svelte'
  import SelectedCard from './SelectedCard.svelte'
  import Backdrop from './Backdrop.svelte'

  import { currentCardSet } from '../store/cards.js'

  let selectedCard = null
  let showCard = false

  const selectCard = event => {
    selectedCard = event.detail.number
  }

  const resetSelection = () => {
    selectedCard = null
    showCard = false
  }

  const toggleShowCard = () => {
    if (showCard) {
      resetSelection()
    } else {
      showCard = true
    }
  }
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

<div class="grid grid-gap-4 grid-col-3 container w-full mx-0 my-auto p-4 flex-1">
  {#each $currentCardSet as number}
    <Card {number} on:select={selectCard} />
  {/each}
</div>

{#if selectedCard}
  <Backdrop on:close={resetSelection}>
    <div class="grid absolute w-full h-full p-4 perspective" transition:fly={{ y: 300 }}>
      <SelectedCard number={selectedCard} show={showCard} on:close={toggleShowCard} />
    </div>
  </Backdrop>
{/if}
