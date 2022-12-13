const http = require('http');
 
const express = require('express');
const bodyParser = require('body-parser');

const app  = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product',(req,res,next)=>{
    console.log('In the middleware! \n another!');
    console.log("one", "\n", "two");
    res.send(
        '<body><form action="/product" method="POST"><input type="text" name="title"><button type="submit">Send</button></form>  </body>'
    ); 
})

app.use('/product',(req,res,next)=>{ 
    res.send('<h1>'+ req.body.title +'</h1>');
})
app.use('/',(req,res,next)=>{ 
    res.send('<h1>Main</h1>');
})
 
const server = http.createServer(app);

server.listen(3000);
