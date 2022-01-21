//import employee class 
const Employee = require('./Employee');

//inheritance (using parent class)
class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
        //calling Employee(parent's) constructor
        super(id, name, email);
        this.officeNumber = officeNumber;
    }
    //overriding
    getRole() {
        return 'Manager';
    }
    getOfficeNumber()
    {
        return this.officeNumber;

    }
}

//exported
module.exports=Manager;