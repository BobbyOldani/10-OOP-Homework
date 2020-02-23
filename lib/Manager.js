// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, role, office) {
    console.log("Manager constructor response: " + name, id, email, role, office);
    super(name, id, email);  
    this.role = role;
    this.officeNumber = office;
    };

getRole() {
    return "Manager"
};
getOfficeNumber() {
    return this.officeNumber
};
   
 };

 module.exports = Manager;