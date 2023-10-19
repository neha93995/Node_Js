// NPM - stands for Node package menager
// npm is a library and registry for javascript software packages. 
// npm also has command-line tools to help you install the different packages and manage their dependencies.
// we can install packages or dependencies by using command  -- " npm i package_name"


// var generateName = require("sillyname");
// var sillyname = generateName();
//console.log(`my name is ${sillyname}.`);


import superheroes from 'superheroes';

const name = superheroes.random();

console.log(`I am ${name}`);