const express = require('express'), 
    app = express(),
    cors = require('cors'),
    axios = require('axios'),
    session = require('express-session');

app.use(express.static('public'));
app.use(cors());
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
  }))

app.listen(3003);

app.get('/auth', (req,res) => {
    let code = req.query.code;
    let error = req.query.error;
    if(error !== undefined){
        // return res.json(false); 
        console.log("ERRRRRRRROR");
        console.log(error);
        res.redirect('/error');
    }
    console.log(code);
    // return res.json(true);
    
    // *Token
    return axios({
        method: 'post',
        url: 'https://kauth.kakao.com/oauth/token',
        headers: { 'Content-type': 'application/x-www-form-urlencoded' },
        params: {
            grant_type: 'authorization_code',
            client_id: '',
            redirect_uri: 'http://192.168.0.3:3003/auth',
            code
        }
    })
        .then( json => {
            req.session.kid = 123;
            req.session.token = json.data.access_token;
            res.redirect('/kakaologin');
        })
        .catch((_) => res.redirect('/error'));    
});
app.get('/kakaologin', (req,res) => {
    if(req.session.kid === undefined) return res.json("no!");
    return res.sendFile(__dirname+'/public/kpage.html');
});
app.get('/logout', (req,res) => {
    req.session.kid = undefined;
    let token = req.session.token;
    let headers = {"Authorization": `Bearer ${token}`,};
    return axios({
            url: 'https://kapi.kakao.com/v1/user/logout',
            method: 'post',
            headers
        })
            .then(_ => {
                req.session.token = undefined;
                return res.redirect('/');
            })
            .catch(_ => res.json("ERR"));
});
app.get('*', (req, res) => res.sendFile(__dirname + "/public/index.html"));