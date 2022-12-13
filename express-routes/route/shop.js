const express = require('express');
const router =  express.Router();

 

router.get('/shop',function (req,res){
    let something = req.query.color1;//first parameter from get url 
    res.send("<h1>shop index</h1>"+something);
 
});

module.exports = router;