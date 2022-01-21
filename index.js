const fs = require('fs');
const inquirer = require('inquirer');

const manager = require('./lib/Manager');
const intern = require('./lib/Intern');
const engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');

//add team members
const teamMembers = [];
const Role = [];

//respond to questions on mananger
const manQuestions = [{
    type: 'input',
    name: 'id',
    message: 'Enter managers Id: (*)',
    validate: validId => {
        if (validId) {
            let id = parseInt(validId);
            if (Number.isInterger(id)) {
                return true;
            } else {
                console.log("Must be a digit between 0-9");
                return false;
            }
        } else {
            console.log ("Id is required");
            return false;
        }
    }
},
{
    type: "input",
    name: "name",
    message: "Enter Managers name: (*)",
    validate: validName => {
        if (validName) {
            let letters = /^[A-Za-z]+$/;
            if(validName.match(letters)) {
                return true;
            } else {
                console.log("Name should have letters A-Z only")
                return false;
            }
        }else {
            console.log("Employees name is required");
            return false;
        }
    }
},
{
    type: 'input',
    name: 'email',
    message: 'Enter Managers email address: (*)',
    validate: validEmail => {
        if (validEmail) {

        let email = /\S+@\S+\.\S+/;
        if(validEmail.match(email)) {
            return true;
        } else {
            console.log("Invalid email address");
        } 
    } else {
            console.log("Email is required");
            return false;
        }
    }
},
{
    type:"input",
    name: "officeNumber",
    message: "Enter managers office number",
    validate: validOfficeNumber => {
        if (validOfficeNumber) {
            let num = parseInt(validOfficeNumber);
            if (Number.isInteger(num)) {
                return true;
            } else {
                console.log( "Must be 0-9 digit only");
                return false;
            }
        } else {
            console.log("Manager office number is required");
            return false;
        }
    }
},
{
    type: "confirm",
    name: "newEmployee",
    message: "Would you like to add another team memeber?",
    default: false
}
]