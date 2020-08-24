<script>
  import Nested from './Nested.svelte'
  import Inner from './Inner.svelte'

  let rand = -1;
  function getRand() {
    fetch("./rand")
      .then(d => d.text())
      .then(d => (rand = d));
  }

  let count = 0;
  $: doubled = count * 2;

  function handleClick(){
    count +=1;
    
  }
  $:console.log( `the count is ${count}`);


  function handleAlert(self) {
    console.log( self );
  }
  
  function handleMessage(event){
    console.log( event);
    alert(event.detail.text +"\n"+ event.detail.desc);
  }

  let name = '';
</script>

<h1>Your number is {rand}!</h1>
<button on:click={getRand}>Get a random number</button>

<button on:click={handleClick}>
  Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
<p>
  {count} doubled is {doubled}
</p>

<Nested />
<br/>

<button on:click|self={handleAlert}>
print event.target
</button>

<Inner on:message={handleMessage} />

<input bind:value={name} />
<h2>내이름은 {name}</h2>
