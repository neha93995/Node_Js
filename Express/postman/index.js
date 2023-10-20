import express  from "express";
import bodyParser from 'body-parser'
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));


app.get("/",(req,res)=>{
    res.send("<h1>Home Page</h1>")
});

app.post("/register",(req,res)=>{
    res.sendStatus(201);
});

app.put("/user/neha",(req,res)=>{
    res.sendStatus(200);
});

app.patch('/user/neha',(req,res)=>{
    res.sendStatus(200)
});

app.delete("/user/neha",(req,res)=>{
    //deleting user
    res.sendStatus(200);
});

app.listen(port, ()=>{
    console.log(`app is running on port ${port}`)
});