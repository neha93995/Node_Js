import express from "express";
const app = express();


app.get('/',(req, res)=>{
    console.log(req.rawHeaders);
    res.send("<h1>Home page</h1>")
})

app.get('/about',(req, res)=>{
    console.log(req.rawHeaders);
    res.send("<h1>About me</h1><p>My name is neha</p>")
})

app.get('/contact',(req, res)=>{
    console.log(req.rawHeaders);
    res.send("<h1>Contact me</h1>")
})

app.listen(4000, ()=>{
    console.log("server is running of port 4000");
})

