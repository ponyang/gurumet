import App from './App.svelte';

const app = new App({
	//출력 생성물을 document.body에 삽입 
	target: document.body,
	//컴포넌트에 전달해야하는 속성들의 객체 데이터
	props: {
		name: 'world',
		answer: 42
	}
});

export default app;