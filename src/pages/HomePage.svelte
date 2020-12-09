<script>
    let name = "Svelte";
	let logo = 'https://avatars1.githubusercontent.com/u/56661529?s=460&u=a78acbb3fc77487cd2078e460ba19d8cc751b2f2&v=4';
	let github = "https://github.com/doyle-flutter";
    let ko = "제임쓰 Dev";
    export let stateCount;
    import AppBar from '../components/AppBar.svelte';
    import SlideImg from '../components/SlideImg.svelte';
    import KakaoLoginBtn from '../components/KakaoBtn.svelte'
</script>

<div>
    <AppBar id=0/>
    <SlideImg />
    <main>
        <div class="main">
            <div>
                <h1>Hello {name}!</h1>
            </div>
            <div>
                <p>{ko}</p>
            </div>
            <div>Store(State) : {stateCount}</div>
            <KakaoLoginBtn />
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