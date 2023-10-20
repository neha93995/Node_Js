import express from 'express';
import bodyParser from 'body-parser';
import {dirname} from 'path';
import { fileURLToPath } from 'url';

const _dirname = dirname(fileURLToPath(import.meta.url));

console.log(_dirname)
const app = express();
const port = 3000;

var userIsAuthorised = false;

app.use(bodyParser.urlencoded({extended:true}));

function passwordCheck(req, res, next){
    const password = req.body['password'];

    if(password == 'ILoveProgramming')
    {
        userIsAuthorised =true;
    }
    next();
}

app.use(passwordCheck);

app.get('/',(req,res)=>{
    res.sendFile(_dirname+"/index.html");
});

app.post("/check",(req,res)=>{
    console.log(userIsAuthorised)
    if(userIsAuthorised)
    {
        res.sendFile(_dirname+'/secret.html');
    }
    else{
        res.sendFile(_dirname+"/index.html")
    }
});


app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})