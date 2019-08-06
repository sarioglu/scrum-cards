<script>
  import { get } from 'svelte/store'
  import { fly } from 'svelte/transition'

  import { CARD_SET_NAMES, currentCardSetName } from '../store/cards.js'

  import Backdrop from './Backdrop.svelte'

  let selectedCardSetName = get(currentCardSetName)

  export let onClose = () => {}
</script>

<style>
  .modal {
    width: 100%;
    height: 30%;
    padding: 1rem 2rem;

    position: absolute;
    bottom: 0;

    border-radius: 0.5rem;
    background-color: #ffffff;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  .title {
    text-align: center;
    font-family: 'Rubik', sans-serif;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .radio-button {
    display: block;
    padding: 0.25rem 0;
    margin: 0.25rem 0;
  }

  .submit-button {
    margin-top: 2rem;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    background-color: #3182ce;
    color: #ffffff;
  }
</style>

<Backdrop on:close={onClose}>
  <div class="modal" transition:fly={{ y: 300 }}>
    <div class="title">Settings</div>
    <form
      on:submit|preventDefault={() => {
        currentCardSetName.set(selectedCardSetName)
        onClose()
      }}>
      {#each Object.values(CARD_SET_NAMES) as cardSetName}
        <label class="radio-button">
          <input type="radio" bind:group={selectedCardSetName} value={cardSetName} />
          {cardSetName}
        </label>
      {/each}

      <button class="submit-button" type="submit">Save</button>
    </form>
  </div>
</Backdrop>
