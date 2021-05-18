const http=require('http');
const port=3001;

const reqHandler=(req,res)=>{
    console.log(req.url);
    res.end('Congrats you\'re using your first Node.js Web Server');
}

const server= http.createServer(reqHandler);

server.listen(port,(err)=>{
    if(err){
        return console.log(`Unable to start the server on port ${port}`);
    }
    console.log(`This HTTP server is running on port ${port}`);
});
