const http=require("http");
const myserver=http.createServer((req,res)=>{
    res.end("my name is tabish")
})
myserver.listen(4000,()=>{
    console.log('Server is running on port 4000');
})