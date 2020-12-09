const express = require('express'), 
    app = express(),
    cors = require('cors');

app.use(express.static('public'));
app.use(cors());

app.listen(3003);


app.get('/', (req, res) => res.sendFile(__dirname + "/public/index.html"));
app.get('/auth', (req,res) => {
    let code = req.query.code;
    let error = req.query.error;
    if(error !== undefined){
        // return res.json(false); // -> 
        console.log(error);
        res.redirect('/error');
    }
    console.log(code);
    // return res.json(true);
    
});
app.get('*', (req, res) => res.sendFile(__dirname + "/public/index.html"));