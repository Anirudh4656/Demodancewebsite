const express = require("express");
const path = require("path");
const fs = require("fs");
const app =  express();
const port = 8000;
 
app.use('/static', express.static('static'))
app.use(express.urlencoded())


app.set('view engine','pug')

app.set('views', path.join(__dirname,'views'))

app.get('/', (req,res)=>{
    
    const params = {}
    res.status(200).render('index.pug',params);
})
app.post('/', (req,res)=>{
    
    
    const params = { }
    res.status(200).render('index.pug',params);
})
// START THE SERVER
app.listen(port, ()=>{
    
    console.log(`the appplication started succesfully on port ${port}`);
});