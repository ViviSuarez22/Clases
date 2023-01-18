//levantar un servidor con express
const express = require('express');
const path = require ('path');

const app = express();

app.listen(3000);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})
