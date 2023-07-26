// importing modeules
import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

//for taking input from user-npm.js - inquirer package
inquirer
  .prompt([{
     message: "type in your URL",
     name: "URL",
  },
    
  ])
  .then((answers) => {
    const url =answers.URL;
    //for generating image : npm.js-qr-img package
    var qr_svg = qr.image(url);
qr_svg.pipe(fs.createWriteStream('qr-img.png'));


  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  }); 
  
  // 1.npm init to enter into envt to get the packages
  //2. npm init to install packages ......syntax: npm i package name
  // 3. node file name to run the file