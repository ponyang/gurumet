import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world',
		answer: 42
	}
});

export default app;