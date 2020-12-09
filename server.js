const express = require('express'), 
    app = express(),
    cors = require('cors');

app.use(express.static('public'));
app.use(cors({origin:"192.168.0.3"}));

app.listen(3003);


app.get('/', (req, res) => res.sendFile(__dirname + "/public/index.html"));
app.get('/auth', (req,res) => {
    let code = req.query.code;
    let error = req.query.error;
    if(error !== undefined){
        // return res.json(false);
        res.redirect('/error');
    }
    console.log(code);
    // return res.json(true);
    res.redirect('/error');
});
app.get('*', (req, res) => res.sendFile(__dirname + "/public/index.html"));