import express from 'express';
import bodyParser from 'body-parser';

import {dirname} from 'path';
import { fileURLToPath } from 'url';

const _dirname = dirname(fileURLToPath(import.meta.url));




const app  = express();
const port = 3000;
var bandName = "";

app.use(bodyParser.urlencoded({extended:true}));

function bandNameGenerator(req,res,next)
{
    console.log(req.body);
    bandName = req.body['street'] + req.body['pet'];
    next();
}

app.use(bandNameGenerator);

app.get('/',(req,res)=>{
    res.sendFile(_dirname + '/index.html');
})

app.post('/submit', (req,res)=>{
    res.send(`<h1>Your band name is : </h1><h2>${bandName}</h2>`)
})

app.listen(port,()=>{
    console.log(`LISTENING on port ${port}`);
});

