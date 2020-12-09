<script>
    const key = '';
    const redirect_uri = 'http://192.168.0.3:3003/auth';
    const url = `https://kauth.kakao.com/oauth/authorize?client_id=${key}&redirect_uri=${redirect_uri}&response_type=code`;
</script>
<div>
    <a href={url}>kakao</a>
</div>
<style></style>