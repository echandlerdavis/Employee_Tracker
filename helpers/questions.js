const mysql = require('mysql2')
const inquirer = require('inquirer');
const questions = require('../server')
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


class UpdateDataBase {
  viewAllEmp(){
    return db.promise().query("SELECT * from employee")
  };

  getAllRoles(){
    return db.promise().query("SELECT * FROM role")
  }

  viewAllDept(){
    return db.promise().query("SELECT * from department")
  }

 addDept(){
  let question = {
    type: "input",
    name: "deptName", 
    message: "What is the name of the department you would like to add?"
  };
  inquirer.prompt(question)
  .then(response => {
    let newDept = [response.deptName];
    db.query("INSERT INTO department (department_name) VALUES (?)", newDept, (err) => {
      if(err){
        console.log(err);
      }else{
        return console.log("Department Added.")
      } 
    })
  })
};

 addRole(){
  inquirer
    .prompt([{
    type:"input",
    name:"roleName",
    message:"What is the name of the role?"
  },
  {
    type:"input",
    name:"salary",
    message:"What is the salary of the role?"
  },
  {
    type:"input",
    name:"deptID",
    message:"What is the role's department id?"
  }
])
    .then(response =>{
      let newRole = [response.roleName, response.salary, response.deptID]
      db.query("INSERT INTO role (name) VALUES(?)", newRole, (err) => {
        if(err){
          console.log(err)
        }
        console.log("Role added")
      })
    })
     
};


 addEmp(){
  inquirer
    .prompt([{
    type:"input",
    name:"firtName",
    message:"What is the first name of the employee?"
  },
  {
    type:"input",
    name:"lastName",
    message:"What is the last name of the employee?"
  },
  {
    type:"input",
    name:"role",
    message:"What is the employee's role id?"
  },
  {
    type:"input",
    name:"manager",
    message:"What is the manager id?"
  }
])
    .then(response =>{
      let newEmp = [response.firstName, response.lastName, response.role, response.manager]
      db.query("INSERT INTO role (first_name, last_name, role_id, manager_id) VALUES(?)", newEmp, (err) => {
        if(err){
          console.log(err)
        }
        console.log(`${response.firstName} ${response.lastName} added`)
      })
    })
};

updateEmp(roleId, employeeId){
  return db.promise().query("UPDATE employee SET role_id = ? WHERE id = ?", [roleId, employeeId], (err) =>{
    if(err){
      console.log(err)
    }
  })
};
};

module.exports = new UpdateDataBase()

