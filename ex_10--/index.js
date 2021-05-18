const express=require('express');
const app=express();
const oneLinerJoke=require('one-liner-joke');
const getRandomJoke=oneLinerJoke.getRandomJoke();

app.listen(3000,()=>{
    console.log('Listening at port 3000...');
});

app.get('/',(req,res)=>{
    res.send('Welcom to AllSet');
});
app.get('/jokes',(req,res)=>{
    res.send(getRandomJoke);
});
//GET jokes: show at least 2 jokes
app.get('/joke',(req,res)=>{
    for(let i=0;i<2;i++){
    res.send(getRandomJoke);}
});
app.post('/joke',(req,res)=>{
    res.send("my jokes are too funny, I'm not getting new ones from you..");
});
app.put('/joke',(req,res)=>{
    res.send('no, no, no.. not changing my act dude!');
});
app.delete('/joke',(req,res)=>{
    res.send('good jokes never get to old');
});
app.all('/joke',(req,res)=>{
    res.send(" I know I'm so good that you're looking for jokes everywhere");
});
//All: joke: I know I'm so good that you're looking for jokes everywhere