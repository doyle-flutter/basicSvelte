<script>
    let myStorage = window.sessionStorage;
    myStorage.setItem('kakao','true');
    setTimeout(() => window.location.replace('/'), 2000);
</script>
<div>
    <p>카카오 로그인 성공</p>
    <p>잠시후 이동합니다</p>
</div>
<style></style>