<script>
  import { get } from 'svelte/store'
  import { fly } from 'svelte/transition'

  import { CARD_SET_NAMES, currentCardSetName } from '../store/cards.js'

  import Backdrop from './Backdrop.svelte'

  let selectedCardSetName = get(currentCardSetName)

  export let onClose = () => {}
</script>

<Backdrop on:close={onClose}>
  <div class="w-full absolute px-8 py-4 bottom-0 rounded-lg bg-white shadow-md" transition:fly={{ y: 300 }}>
    <div class="text-center font-rubik text-2xl mb-4">Settings</div>
    <form
      on:submit|preventDefault={() => {
        currentCardSetName.set(selectedCardSetName)
        onClose()
      }}>
      {#each Object.values(CARD_SET_NAMES) as cardSetName}
        <label class="block px-0 py-1 mx-0 my-1">
          <input type="radio" bind:group={selectedCardSetName} value={cardSetName} />
          {cardSetName}
        </label>
      {/each}

      <button class="w-full mt-4 px-4 py-2 rounded bg-blue-600 text-white" type="submit">Save</button>
    </form>
  </div>
</Backdrop>
