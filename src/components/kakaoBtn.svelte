<script>
    const key = '';
    const redirect_uri = 'http://192.168.0.3:3003/auth';
    const url = `https://kauth.kakao.com/oauth/authorize?client_id=${key}&redirect_uri=${redirect_uri}&response_type=code`;
</script>
<div class="kakoBtn">
    <a href={url}>kakao</a>
</div>
<style>
    div.kakoBtn > a{
        padding: 5px 20px;
        background-color: yellow;
        color: black;
        font-weight: bold;
        border: 2px solid black;
        border-radius: 10px;
    }
    div.kakoBtn > a:hover{
        background-color: yellowgreen;
    }
</style>