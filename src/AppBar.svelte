<script>
  import {Link} from 'svelte-routing';
  export let id;
</script>

<div class="bar">  
  <Link to='/'>
    {#if id == 0} 
      <div class="btn first">HOME</div>
    {:else}
      <div class="btn">HOME</div>
    {/if}
  </Link>
  <Link to="/a">
    {#if id == 1} 
      <div class="btn first">Category</div>
    {:else}
      <div class="btn">Category</div>
    {/if}
  </Link>
</div>

<style>
  div.first{
    background-color: green;
  }
  div.bar{
    background-color: grey;
    font-size: 0;
  }
  div.btn{
    font-size: 1rem;
    display: inline-block;
    color: white;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
  }
  div.btn:hover{
    background-color: lightgrey;
  }
</style>