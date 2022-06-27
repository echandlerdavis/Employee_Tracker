const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');


const questions = () => {
    return inquirer.prompt([
        {
            type:'list',
            name:'toDo',
            message:'What would you like to do?',
            choices:[
              'Add Department',
              'Add Role',
              'Add Employee',
              'Update Employee Role'
            ]
          },
        // {
        //     type: 'input',
        //     name: 'title',
        //     message: 'What is the title of your project?',
        //   },

        ])
};


//export here and put in the server.js