const express=require('express');
const app=express();
const path=require('path');

app.listen(3000,()=>{
    console.log("listening at port 3000...");
});

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
});

app.get('/products',(req,res)=>{
    res.sendFile(path.join(__dirname,'products.html'));
});



