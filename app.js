const http=require('http')

const server=http.createServer((req,res)=>{
    console.log(req) 
    if(req.url==='/')
    {
        res.end("Welcome to our homepage")
    }
    if(req.url==='/service')
    {
        res.end("service done")
    }
    else{
        res.end(
            `<h1>oops wrong address</h1>`
        )
    }
    
    
})

server.listen(10000)