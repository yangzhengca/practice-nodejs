const { static } = require('express');
const express=require('express');
const app=express();
const path=require('path');

app.listen(3000);
app.use('/assets',express.static('public'));
app.use(express.static('public'));
app.use(express.static('img'));
app.use(express.static('css'));
app.use(express.static('js'));


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})