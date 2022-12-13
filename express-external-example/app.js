'use strict';
var express = require('express');
var bodyParser = require('body-parser')
var app  =  express();
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const http = require('http');
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.get('/',function (req,res){ 
     console.log("just something");
     next();
});
app.get('/',function (req,res){ 
    
    res.setHeader('Content-Type','text/html');
    res.status(200).sendFile(__dirname + '/views/main.html');
});

app.post('/',urlencodedParser, function(request, response, next){
    console.log(request.body.message);  
    response.status(200).sendFile(__dirname + '/views/main.html');
});

app.get('/navbar',urlencodedParser, function(request, response, next){ 
    response.status(200).sendFile(__dirname + '/views/navbar.html');
});
var server = app.listen(process.env.PORT || `3000` , function(){
    console.log("Hata!");
})