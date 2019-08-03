<script>
  import Card from './Card.svelte'

  import { currentCardSet } from '../store/cards.js'
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
</style>

<div class="grid">
  {#each $currentCardSet as number}
    <Card {number} />
  {/each}
</div>
