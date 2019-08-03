<script>
  import Card from './Card.svelte'

  import { currentCardSet } from '../store/cards.js'
</script>

<style>
  .grid {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;

    background-color: #edf2f7;

    height: 100%;
    padding: 1rem;
    box-sizing: border-box;
  }
</style>

<div class="grid">
  {#each $currentCardSet as number}
    <Card {number} />
  {/each}
</div>
