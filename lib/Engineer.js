//imported
const Employee = require('./Employee')

//inheritance (using parent class)
class Engineer extends Employee {
    constructor(id, name, email, github) {
        //calling Employee(parent's) constructor
        super(id, name, email);
        this.github = github;
    }
    //overriding
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.github;
    }
}
//to export
module.exports = Engineer;