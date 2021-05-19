const express=require('express');
const app=express();
const path=require('path');

app.listen(3000,()=>{
    console.log('listen at port 3000...');
});

app.get('/',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'index.html'));
});
app.get('/products',(req,res)=>{
    res.status(500).send('Server error, please try it later');
});
app.get('/users',(req,res)=>{
    res.status(404).sendFile(path.join(__dirname,'404.html'));
})