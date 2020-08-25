<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function sayHello() {
		dispatch('message', {
            text: '안녕하세요!!',
            desc: "추가 텍스트"
		});
	}
</script>

<button on:click={sayHello}>
	Click to "안녕하세요"
</button>