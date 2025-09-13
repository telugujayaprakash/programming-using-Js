const http=require("http")
const app=http.createServer();

app.on("request",(req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
    res.write("<h1>hello nodejs this is rendered from javascript</h1>")
})


app.listen(8000,()=>{
    console.log("server Started")
})