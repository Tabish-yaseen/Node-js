  let fs=require ('fs')// imports the fs module
  const routeHandler=(req,res)=>{
    const url=req.url
    const method=req.method
    if(url==="/"){
      fs.readFile('message.txt',(err,data)=>{
        if(err){
          console.err("error reading the file",err)
        }
        else{
        
          res.write('<html>')
        res.write('<head><title> Node js response</title></head>')
        res.write('<body>')
        res.write(`<p>${data}</p>`)
        res.write('<form action="/message" method="POST"><input type="text" name="mymessage"><button type="submit">submit</button></form>')
        res.write('</body>')
        res.write('</html>')
         res.end()
        }
     
        })
      }
      

        
    else if(url==="/message" && method==="POST"){
        const body=[]
        req.on('data',(chunk)=>{
            // console.log(chunk)
            body.push(chunk)

        })
         req.on('end',()=>{
           const parsedBody= Buffer.concat(body).toString()
        //    console.log(parsedBody)
          const message= parsedBody.split('=')[1]
           fs.writeFile("message.txt",message,()=>{
            res.statusCode=302;
            res.setHeader('Location','/')
           res.end()
  
          })

          })

    }
    else{
  res.setHeader('Content-Type','text/html')
  res.write('<html>')
  res.write('<head><title> Node js respons</title></head>')
  res.write('<body><h1>hello from node js</h1></body>')
  res.write('</html>')
  res.end()
    }


  }
  
  module.exports={
    handler:routeHandler,
    name:"tabish"

  }
  
  //alternative ways
  // module.exports=routeHandler;
  // module.exports.handler=routeHandler,
  // exports.handler=routeHandler


   