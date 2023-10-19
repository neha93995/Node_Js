// to use the file System module, use the require() method
const fs = require("fs");

// this command writes the next into the specified file or if file is not present this command will create it 
fs.writeFile("Message.txt", "hello from NodeJs", err=>{
    console.log("the file has been saved");
})


// read text from file
fs.readFile("./Message.txt",'utf8',(err,data)=>{
    if(err) throw err.message;
    console.log(data);
})