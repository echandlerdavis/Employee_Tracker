
const inquirer = require('inquirer');
const UpdateDataBase = require('./helpers/questions')
const mysql = require('mysql2')

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: 'root',
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
  );


const questions = [
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
          }
        ];

const init = () => {
    inquirer.prompt(questions)
    .then((userChoice) => {
      switch(userChoice.toDo){
        case "Add Department":
          UpdateDataBase.addDept()
          break;
        case "Add Role":
            UpdateDataBase.addRole()
          break;
        case "Add Employee":
            UpdateDataBase.addEmp()
          break;
        case "Update Employee Role":
            UpdateDataBase.updateEmp()
          break;
        
      }
  
    })
    .catch(err => {
      console.log(err)
    })};


    init()
