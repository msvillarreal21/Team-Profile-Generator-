//import employee class 
const Employee=require('./Employee')

//inheritance (using parent class)
class Intern extends Employee {
    constructor(id, name, email, school) {
       //calling Employee(parent's) constructor  
        super(id, name, email);
        this.school = school;
    }
    getSchool() {
        return this.school

    }
    //overriding
    getRole() {
        return "Intern";
    }
}
//to export this class
module.exports = Intern;