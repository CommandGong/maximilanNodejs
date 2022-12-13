const http = require('http');
 
const express = require('express');
const bodyParser = require('body-parser');


const admin = require('./route/admin');
const shop = require('./route/shop');

const app  = express();

app.use(shop);
app.use(admin);
 
app.use((req,res,next)=>{
    res.status(404).send('<h1>page not found </h1>');
});
 
const server = http.createServer(app);

server.listen(3000);
