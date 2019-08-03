<script>
  export let number
</script>

<style>
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100%;
    height: 100%;

    background-color: white;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border-radius: 0.5rem;

    text-align: center;
    font-size: 6rem;
    font-weight: bold;

    transition: all 200ms ease-in;
  }

  div:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
</style>

<div>{number}</div>
