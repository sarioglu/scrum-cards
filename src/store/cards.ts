import { readable, writable, derived } from 'svelte/store'

export const CARD_SET_NAMES = {
  CLASSICAL: 'Classical',
  FIBONACCI: 'Fibonacci',
  TSHIRT: 'T-Shirt Sizes',
}

export const cardSets = readable(
  {
    [CARD_SET_NAMES.CLASSICAL]: ['0', '½', '1', '2', '3', '5', '8', '13', '20', '40', '100', '?', '☕️'],
    [CARD_SET_NAMES.FIBONACCI]: ['0', '1', '2', '3', '5', '8', '13', '21', '34', '55', '89', '∞', '☕️'],
    [CARD_SET_NAMES.TSHIRT]: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '☕️'],
  },
  () => {},
)

export const currentCardSetName = writable(CARD_SET_NAMES.CLASSICAL)

export const currentCardSet = derived(
  [cardSets, currentCardSetName],
  ([$cardSets, $currentCardSetName], set) => {
    set($cardSets[$currentCardSetName])
  },
  [],
)
