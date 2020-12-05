import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world !',
		ko: '안녕하세요, 제임쓰 Dev 입니다 !',
		logo: 'https://avatars1.githubusercontent.com/u/56661529?s=460&u=a78acbb3fc77487cd2078e460ba19d8cc751b2f2&v=4',
		github: 'https://github.com/doyle-flutter/basicSvelte'
	}
});

export default app;