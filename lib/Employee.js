// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        // console.log("Employee constructor response: " + name);
        this.email = email;
        console.log("From employee class: " + this.name, this.id, this.email)
        // this.role = "Employee";
    };

getName() {
    return this.name;
};
getId() {
    return this.id;
};
getEmail() {
    return this.email;
};
getRole() {
    return "Employee";
}; 

};

module.exports = Employee;