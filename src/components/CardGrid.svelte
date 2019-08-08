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
    grid-gap: 1rem;
    grid-template-columns: repeat(3, 1fr);

    width: 100%;
    margin: 0 auto;
    padding: 1rem;
    box-sizing: border-box;
    flex: 1;
  }

  @media (min-width: 640px) {
    .grid {
      max-width: 640px;
    }
  }

  @media (min-width: 768px) {
    .grid {
      max-width: 768px;
    }
  }

  @media (min-width: 1024px) {
    .grid {
      max-width: 1024px;
    }
  }

  @media (min-width: 1280px) {
    .grid {
      max-width: 1280px;
    }
  }

  .selected-card {
    display: grid;
    position: absolute;
    width: 90%;
    height: 90%;
    margin: 5%;

    perspective: 1000px;
  }
</style>

<div class="grid">
  {#each $currentCardSet as number}
    <Card {number} on:select={selectCard} />
  {/each}
</div>

{#if selectedCard}
  <Backdrop on:close={resetSelection}>
    <div class="selected-card" transition:fly={{ y: 300 }}>
      <SelectedCard number={selectedCard} show={showCard} on:close={toggleShowCard} />
    </div>
  </Backdrop>
{/if}
