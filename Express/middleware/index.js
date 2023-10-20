import bodyParser from 'body-parser';
import express from 'express';
import {dirname} from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;

function logger(req,res, next)
{
    console.log("Requested method: ",req.method);
    console.log("Requested URL : ",req.url);
    next();
}

app.use(logger);

app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    // res.sendFile(__dirname + "/public/index.html")
    res.send('hello')
});

app.post('/submit',(req,res)=>{
    console.log(req.body);
});


app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});

