const express=require('express');
const app=express();

const Logger=require('logplease');
const logger=Logger.create('Neo');

app.get('/',(req,res)=>{
    res.send("Congrats you're using your first Node.js and Express as Web Server");
});

const port=3000;
// app.listen(port,(err)=>{
//     if(err){
//         console.log(`This HTTP server is running on port  ${port}`)
//     };
//     console.log(`This HTTP server is running on port ${port}`);
// });


app.listen(port,(err)=>{
    if(err){
    logger.error(`Unable to start the server on port ${port}`);
    };
    logger.info(`This HTTP server is running on port ${port}`);
})