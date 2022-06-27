//okay so it looks like this is going to be some sort of inquirer app situation, /n
// but instead of inputing the information into a web page it's going to be put into 
// a database. 

// so, refer to both the read_me generator shit and the api/ routing things. 

//also refer to this week's solved mini projects to do the app.put situation. 
//steal the package.json stuff from other assignments. 

//require mysql(put in package.json)
const fs = require('fs');
const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const api = require('./routes/apiRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(api);





///--------------------------- FROM READ ME GENERATOR -------------------------------------
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     return fs.writeFileSync(path.join(process.cwd(), fileName), data)
    

// }
// // TODO: Create a function to initialize app
// function init() {
//     questions()
//         .then((data) => {console.log(data);
//           writeToFile('myREADME.md', generateMarkdown(data))
      
//       })
//         //will this just add it to the existing readme? or will it create a new one?
//         .then(()=> console.log('Successfully wrote to README.md'))
//         .catch((err) => console.error(err));
// }

// // Function call to initialize app
// init();