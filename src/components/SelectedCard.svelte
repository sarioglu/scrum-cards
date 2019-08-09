<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  const select = () =>
    dispatch('close', {
      number,
    })

  export let number
  export let show = true
</script>

<style>
  .card {
    background-color: white;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-radius: 0.5rem;

    position: relative;

    font-family: 'Rubik', sans-serif;
    font-size: 10rem;
    font-weight: 500;

    transition: all 200ms ease-in;
    transform-style: preserve-3d;
  }

  .front,
  .back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    backface-visibility: hidden;
  }

  .front {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .back {
    transform: rotateY(180deg);

    background-image: url('../assets/card-bg.jpg');
    background-size: cover;
    border-radius: 0.5rem;
  }

  .hide {
    transform: rotateY(180deg);
  }
</style>

<button class={`card ${show ? '' : 'hide'}`} on:click={select}>
  <div class="front">{number}</div>
  <div class="back" />
</button>
