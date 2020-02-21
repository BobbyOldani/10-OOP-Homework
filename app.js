const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
// const Employee = require("./lib/Employee");



const employeeInfoSheet = [];

const questions = [
    {   
        type: 'input',
        message: 'What is your full name?',
        name: 'name'

    },
    
    {
        type: 'input',
        message: 'What is your employee ID?',
        name: 'id'
    },

    {
        type: 'input',
        message: 'Please enter your email',
        name: 'email',
    },

    {
        type: 'list',
        message: 'What is your role?',
        name: 'role',
        choices: ['Intern', 'Engineer', 'Manager']
    }
]

const internQ = [
    {
        type: 'input',
        message: 'What school do you attend?',
        name: 'school'
    }
]


const engineerQ = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
    }
]

const managerQ = [
    {
        type: 'input',
        message: 'What is your office number?',
        name: 'number'
    }
]

function getEmployeeInfo() {
inquirer
  .prompt(questions).then(function(resEmployee){
        if (resEmployee.role === 'Intern') {
            console.log(resEmployee);
        inquirer.prompt(internQ).then(function (resIntern) {
            console.log("app js response: " + resEmployee.name);
        let intern = new Intern(resEmployee.name, resEmployee.id, resEmployee.email, resEmployee.role, resIntern.school);
            console.log(intern.getName());
        employeeInfoSheet.push(intern);
            console.log(employeeInfoSheet);
        });
    } 
    else if (resEmployee.role === 'Engineer') {  
        console.log(resEmployee);
        inquirer.prompt(engineerQ).then(function (resEngineer) {
            console.log(resEngineer);
        let engineer = new Engineer(resEmployee.name, resEmployee.id, resEmployee.email, resEmployee.role, resEngineer.github);
            console.log(engineer.getName());
        });
    } else if (resEmployee.role === 'Manager') {
        console.log(resEmployee);
        
        inquirer.prompt(managerQ).then(function (resManager) {
            console.log(resManager);
        let manager = new Manager(resEmployee.name, resEmployee.id, resEmployee.email, resEmployee.role, resManager.office);
            console.log(manager.getName());
        });
    }
    // inquirer.prompt([
    //     {
    //         type: 'confirm',
    //         message: 'Would you like to add another Employee?',
    //         name: 'truefalse'
    //     }.then(function (addEmployee) {
    //         if (addEmployee.truefalse === true) {
    //             getEmployeeInfo();
    //         }
    //     })
  
    // ])
  })
  }
  
  getEmployeeInfo();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member using the correct classes as blueprints!
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!
