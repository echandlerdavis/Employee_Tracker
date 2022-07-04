const inquirer = require('inquirer');
const UpdateDataBase = require('./helpers/questions')
const mysql = require('mysql2')
require('console.table');

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


const questions = 
        {
            type:'list',
            name:'toDo',
            message:'What would you like to do?',
            choices:[
              'View All Departments', 
              'View All Roles',
              'View All Employees',
              'Add Department',
              'Add Role',
              'Add Employee',
              'Update Employee Role',
            ]
          }

const init = () => {
    inquirer.prompt(questions)
    .then((userChoice) => {
      switch(userChoice.toDo){
        case "View All Departments":
          viewDepartments()
          break;
        case "View All Roles": 
          viewRoles()
          break;
        case "View All Employees":
          viewEmployees()
          break;
        case "Add Department":
          addDepartments()
          break;
        case "Add Role":
            addRole()
          break;
        case "Add Employee":
            addEmployee()
          break;
        case "Update Employee Role":
            updateEmployee()
          break;
      }
    })
    .catch(err => {
      console.log(err)
    })};

    function viewDepartments(){
      UpdateDataBase.viewAllDept().then(([rows])=>{
        let departmentData = rows;
        console.table(departmentData)
      })
      .then(() => init())
    }

    function viewEmployees(){
      UpdateDataBase.viewAllEmp().then(([rows])=>{
        let employeeData = rows;
        console.table(employeeData)
      })
      .then(() => init())
    };

    function viewRoles(){
      UpdateDataBase.getAllRoles().then(([rows])=>{
        let roleData = rows;
        console.table(roleData)
      })
      .then(() => init())
    };


    //all of the add functions need to somehow be promisified in order for the init function
    //to be used in a .then, as ".then" is currently coming back undifined.
    //don't know how to promisify

  function addDepartments(){
      UpdateDataBase.addDept()
      .then(() => init())
  }

    function addRole(){
      UpdateDataBase.addRole()
      .then(() => init())
    };

    function addEmployee(){
      UpdateDataBase.addEmp()
      .then(() => init())
    }

    function updateEmployee(){
      UpdateDataBase.viewAllEmp().then(([rows])=>{
        let employeeData = rows;
        const employeeChoices = employeeData.map(({id, first_name, last_name})=>({
          name: `${first_name} ${last_name}`,
          value: id
        }))
        inquirer.prompt([
          {
            type:'list',
            name:'empName',
           message:"Which employee's role do you want to update?",
            choices:employeeChoices
          }
        ])
        .then(res => {
          let employeeId = res.empName;
          UpdateDataBase.getAllRoles()
          .then(([rows])=>{
            let roleData = rows;
            const roleChoices = roleData.map(({id, title})=>({
              name: title,
              value: id
            }))
            inquirer.prompt([
              {
                type:'list',
                name:'newRole',
               message:"Which role would you like the employee to have?",
                choices:roleChoices
              }
            ])
            .then(res => {
              UpdateDataBase.updateEmp(res.newRole, employeeId)
            })
            .then(
              console.log('Employee Role Updated.')
            )
            .then(() => init())
          })
        })
      })
    };

    

    init()
