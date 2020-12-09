<script>
    let name = "Svelte";
	let logo = 'https://avatars1.githubusercontent.com/u/56661529?s=460&u=a78acbb3fc77487cd2078e460ba19d8cc751b2f2&v=4';
	let github = "https://github.com/doyle-flutter";
	let ko = "제임쓰 Dev";
    import AppBar from '../AppBar.svelte';
    import SlideImg from '../slideImg.svelte';
</script>

<div>
    <AppBar id=0/>
    <SlideImg />
    <a href='https://kauth.kakao.com/oauth/authorize?client_id=453a071e0479512fb9e3722b3e5c7d0a&redirect_uri=http://192.168.0.3:3003/auth&response_type=code'>kakao</a>
    <main>
        <div class="main">
            <div>
                <h1>Hello {name}!</h1>
            </div>
            <div>
                <p>{ko}</p>
            </div>
            <div>
                <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
            </div>
            <div><a href="{github}"><img src="{logo}" alt="logo"></a></div>
        </div>
    </main>
</div>

<style>
    div.main{
        text-align: center;
    }
    div.main div{
        margin: 20px 0;
    }
</style>