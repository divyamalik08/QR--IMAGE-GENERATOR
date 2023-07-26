// importing modeules
import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

//for taking input from user
inquirer
  .prompt([{
     message: "type in your URL",
     name: "URL",
  },
    
  ])
  .then((answers) => {
    const url =answers.URL;
    //for generating image
    var qr_svg = qr.image(url);
qr_svg.pipe(fs.createWriteStream('qr-img.png'));


  })
  .catch((error) => {
    if (error.isTtyError) {
     
    } else {
      // Something else went wrong
    }
  }); 
  
