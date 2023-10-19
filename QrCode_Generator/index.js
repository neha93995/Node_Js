

// 1. use the inquirer npm package to get user InputDeviceInfo. 



import inquirer from 'inquirer';
import qr from "qr-image";
import fs from 'fs';

inquirer
.prompt([
    {
        message:"Type in your URL : ",
        name:"URL"
    }
])
.then((answer)=>{
    const url = answer.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('linkedin_qr.png'));

    fs.writeFile("url.txt",url,(err)=>{
        if(err) throw err.message;
        console.log("the file has been saved!");
    });
})
.catch((error)=>{
    if(error.isTtyError)
    {
        
    }
    else{
        
    }
});

// 2. Use the qr-image npm package to trun the user entererd url into a or code image.InputDeviceInfo
// 3. Create a txt file to save the user input using the native fs node module.