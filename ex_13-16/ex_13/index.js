const express=require('express');
const app=express();

app.listen(3000,()=>{
    console.log('Listening at port 3000...');
});

const home=require('./home');
const user=require('./user');

app.use('/',home);
app.use('/users',user);
