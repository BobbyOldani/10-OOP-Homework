// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, role, github){
    console.log("Engineer constructor response: " + name, id, email, role, github);
    super(name, id, email);
    this.role = role;
    this.github = github;
    };

    getRole() {
        return "Engineer"
    };
    getGithub() {
        return this.github;
    };
       
     };

     module.exports = Engineer;