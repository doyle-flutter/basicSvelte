const express = require('express'), 
    app = express(),
    cors = require('cors'),
    axios = require('axios');

app.use(express.static('public'));
app.use(cors());

app.listen(3003);


app.get('/', (req, res) => res.sendFile(__dirname + "/public/index.html"));
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
    .then( e => res.json(true))
    .catch((err) => res.json(false));    
});
app.get('*', (req, res) => res.sendFile(__dirname + "/public/index.html"));