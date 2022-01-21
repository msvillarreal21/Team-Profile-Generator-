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
            if (Number.isInteger(id)) {
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
const askIntern = (employee) => {
    inquirer.prompt([ 
        {
            type: "input",
            name: "school",
            message: "Enter Intern's school name",
            validate: validIntern => {
                if (validIntern) {
                    let letters = /^[A-Za-z]+$/;
                    if (validIntern.match(letters)) {
                        return true;
                    }
                    else {
                        console.log("School name should have alphabet letters only")
                        return false;
                    }
                }
                else {
                    console.log("Intern's school name is required!")
                    return false;
                }
            }
        },
        {
            type:"confirm",
            name: "newEmployee",
            message: "Would you like to add another employee?",
            default: false
        }
    ]).then(response => {
        let emp= new intern(employee.id, employee.name, employee.email, response.school)
        teamMembers.push(emp);
        Role.push("Intern")
        if(response.newEmployee) {
            addnewEmp();
        }
        else {
            console.log("Team completed")
            console.log(teamMembers);
            createHtml(teamMembers);
        }
    });
}

const askManager = () => {
    inquirer.prompt(manQuestions).then(employee => {
        let emp = new manager(employee.id, employee.name, employee.email, employee.OfficeNumber)
        teamMembers.push(emp);
        Role.push("Manager")
        if(employee.newEmployee) {
            addnewEmp();
        }
        else {
            createHtml(teamMembers);
        }
    })
}

const askEngineer = (employee) => {
    inquirer.prompt ([{
        type: "input",
        name: 'github',
        message: "Enter Employee's github user name",
        validate: validGithub => {
            if (validGithub) {
                return true;
            }
            else {
                console.log('Valid Github username required!')
                return false;
            }
        }
    }, 
    { 
        type: 'confirm',
        name: 'newEmployee',
        message: 'Would you like to add another employee?',
        default: false

    }]).then(response => {
        let emp = new engineer(employee.id, employee.name, employee.email, response.github)
        teamMembers.push(emp);
        Role.push("Engineer")

        if(response.newEmployee) {
            addnewEmp();
        }
        else {
            console.log("team completed")
            console.log(teamMembers);
            createHtml(teamMembers);
        }
    });
}

const addnewEmp = () => {
    inquirer.prompt({
        type: 'list',
        name: 'role',
        message: "Select the employee's role: (*)",
        choices: ['Engineer', 'Intern', 'none']
    }).then(employee => {
        if (employee.roel == 'none') {
            createHtml(teamMembers);
        }
        else {
            inquirer.prompt ([
                {
                    type: "input",
                    name: "id",
                    message: "Enter employee's Id: (*)",
                     validate: validID => {
                         if (validID) {
                             let id = parseInt(validID);
                             if(Number.isInteger(id)) {
                                 return true;
                             }
                             else {
                                 console.log('Must have a digit 0-9 only');
                                 return false;
                             }
                         }
                         else {
                             console.log('Id id required');
                             return false;
                         }
                     }
                }, {
                    type: 'input',
                    name: 'name',
                    message: 'Enter employees name: (*)',
                    validate: validName => {
                        if (validName) {
                            let letters = /^[A-Za-z]+$/;
                            if(validName.match(letters)) {
                                return true;
                            }
                            else {
                                console.log('Name should have alphabet only')
                                return false;
                            }
                        }
                        else {
                            console.log('Employees name is required');
                            return false;
                        }
                    }
                }, {
                    type: 'input',
                    name: 'email',
                    message: 'Enter employees email address: (*)',
                    validate: validEmail => {
                        if (validEmail) {
                            let email =  /\S+@\S+\.\S+/;
                            if (validEmail.match(email)) {
                                return true;
                            }
                            else {
                                console.log('Invalid email address');
                            }
                        }
                        else {
                            console.log ('Email is required');
                            return false;
                        }
                    }
                },
            ]).then(function (emp) {
                if(employee.role === "Engineer") {
                    askEngineer(emp);
                }
                else if (employee.role === 'Intern') {
                    askIntern(emp);
                }
            });
        }
    })
}

const addManagerCard = (team) => {
    let e = new manager (team.id, team.name, team.email, team.officeNumber)
    return addEmployeecard(e)+`
    
    Office Number: ${e.getOfficeNumber()}
      </div>
    </div>
  </div>
</div>`
}
const addEngineerCard=(team)=>
{
    let e=new engineer(team.id,team.name,team.email,team.github)

    return addEmployeecard(e)+`
                <div class="employee-entry border border-secondary bg-white">
                  GitHub: <a href="https://github.com/${e.getGithub()}" target="_blank">${e.getGithub()}</a>
                </div>
              </div>
            </div>
          </div>`
}
const addEmployeecard=(e)=>
{
    return ` <div class="col-lg-4 mb-4">
    <div class="card employee-card">
      <div class="card-header employee-header bg-info text-white">
        <h4>${e.getName()}</h4>
        <h5><i class="fas fa-user-graduate "></i> ${e.getRole()}</h5>
      </div>
      <div class="card-body bg-light">
        <div class="employee-entry border border-secondary bg-white ">
          ID: ${e.getId()}
        </div>
        <div class="employee-entry border-right border-left border-secondary bg-white">
          Email: <a href="mailto:${e.getEmail()}">${e.getEmail()}</a>
        </div>
        <div class="employee-entry border border-secondary bg-white">`
}
const addInternCard=(team)=>
{
    let e=new intern(team.id,team.name,team.email,team.school)

    return  addEmployeecard(e)+`   
            School: ${e.getSchool()}
            </div>
            </div>
          </div>
        </div>
  `
}
const renderHtml=(teamMembers)=>
{
    let starthtml=`<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>My Team Roster</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
    </head>
    
    <body>
      <header class="jumbotron text-center my-team-header bg-info text-white">
        <h1>My Team Roster</h1>
      </header>
      <main class="container ">
        <div class="row justify-content-center">
         `
    let endHtml=` </main>
    </body>
   </html>`
    for(let i=0;i<teamMembers.length;i++)
    {
        
     if(Role[i]==="Intern")
        {

            starthtml+=addInternCard(teamMembers[i]);
        }
        else if(Role[i]==="Engineer")
        {        
            let e=new engineer("a","b","c","d")
            starthtml+=addEngineerCard(teamMembers[i],e.getRole());
        }
        else 
        {
            let e=new manager("a","b","c","d")

            starthtml+=addManagerCard(teamMembers[i],e.getRole());
        }
    
          
       
     

    }
    return  starthtml+endHtml;
}
const createHtml=(teamMembers)=>
{
    fs.writeFile("./dist/team.html", renderHtml(teamMembers), err=> {
        if (err) {
            console.log(err);
        };
    });
    console.log("end");
}
const init = () => {
    askManager();
}

init();