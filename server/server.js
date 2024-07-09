const express =require("express");
// const core=requi
const app=express();
port=800;

app.get("/api/youtube",(req,res)=>{
    res.json({Like:"Like our Coding Videos", Subscribe:"Subscribe to our coding channel "})

})

app.listen(port,()=>{
    console.log(`server is Running on Port no : ${port}`)
})