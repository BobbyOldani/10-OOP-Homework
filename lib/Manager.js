// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, office, role) {
    console.log("Manager constructor response: " + name, id, email, role, office);
    super(name, id, email);  
    this.role = role;
    this.office = office;
    };

getRole() {
    return "Manager"
};
getOffice() {
    return this.office
};
   
 };

 module.exports = Manager;