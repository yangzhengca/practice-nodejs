const express=require('express');
const app=express();

app.listen(3000);



const requestTime=(req,res,next)=>{
    const message=`Request: ${req.baseUrl} ${Date.now()}`;
    console.log(message);
    next();
};

app.use(requestTime);

app.get('/',(req,res)=>{
    res.json({
        "status": 200,
        "message": "Este request/response está OK"
    });
});