const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const { request, response } = require('express');

var app = express();

app.use(express.json())
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Permitir crox origin en toda la aplicacion
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.get("/", (req, res) => {
    res.send("Zilonix")
})

const PORT = process.env.PORT || 8280;
const ENV = process.env.NODE_ENV
app.listen(PORT, (req, res) => {
    console.log(`Server listening on port ${PORT} Enviroment ${ENV}`);
})


