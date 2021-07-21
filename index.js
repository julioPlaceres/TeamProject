const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const utility = require("util");
const writeToFile = utility.promisify(fs.writeFile)
let teamArray = [];

// Initial funtion that will trigger the team built, with manager being the first being called
menu = () => {
    console.log("Welcome to the Team member assigment page, Please select a Manager for your Team");
    selectManager();
}

// Will trigger first at the initiation of the team to get the manager's info
function selectManager() {
    return inquirer.prompt([
        {
            name: "managerName",
            type: "input",
            message: "What is your manager's name?",
            validate: async (input) => input == "" ? "Please provide a proper name" : true
        },
        {
            name: "managerId",
            type: "input",
            message: "Select an ID for your manager"
        },
        {
            name: "managerEmail",
            type: "input",
            message: "Type your manager's email"
        },
        {
            name: "managerOffice",
            type: "input",
            message: "What is your manager's office number?"
        }
    ]).then(function (response) {
        // Creation of an instance of the manager's class to be added to the teamArray that will be used to generate the html
        teamArray.push(new Manager(response.managerId, response.managerName, response.managerEmail, response.managerOffice));
        // Loop to add members of the team starts here
        selectTeam();
    })
}

// This will be the function to loop through the prompts to assemble the wanted team
function selectTeam() {
    return inquirer.prompt([
        {
            type: "list",
            name: "userChoice",
            message: "Which type of team member would you like to add?",
            choices: [
                "Engineer",
                "Intern",
                "Finish my team"
            ]
        }
    ]).then(response => {
        switch (response.userChoice) {
            case "Engineer":
                addEngineer();
                break;

            case "Intern":
                addIntern();
                break;

            default:
                renderTeam();
                break;
        }
    }).catch(err => {
        console.log(err);
    });
}

// Function with the prompts to add engineering data and create an instance of the Engineer class to be added to Team Array
function addEngineer() {
    return inquirer.prompt([
        {
            name: "engineerName",
            type: "input",
            message: "What is the engineer's name?"
        },
        {
            name: "engineerId",
            type: "input",
            message: "Select an ID for the engineer"
        },
        {
            name: "engineerEmail",
            type: "input",
            message: "Type your engineer's email"
        },
        {
            name: "engineerGithub",
            type: "input",
            message: "What is the engineer's github username?"
        }
    ]).then(function (response) {
        teamArray.push(new Engineer(response.engineerId, response.engineerName, response.engineerEmail, response.engineerGithub));
        selectTeam();
    })
}

// Function with the prompts to add Intern data and create an instance of the Intern class to be added to Team Array
function addIntern() {
    return inquirer.prompt([
        {
            name: "internName",
            type: "input",
            message: "What is the Intern's name?"
        },
        {
            name: "internId",
            type: "input",
            message: "Select an ID for the intern"
        },
        {
            name: "internEmail",
            type: "input",
            message: "Type your intern's email"
        },
        {
            name: "internSchool",
            type: "input",
            message: "What school is the intern going to?"
        }
    ]).then(function (response) {
        teamArray.push(new Intern(response.internId, response.internName, response.internEmail, response.internSchool));
        selectTeam();
    })
}

// "renderTeam", will get all the information needed in order to render the index.html and style.css 
function renderTeam(){
    let cardBody = ""; // Variable that will be used to storage all cards to be inserted as body in the html

    // will loop through each element of the TeamArray and will call the GetRole method of the specified class
    teamArray.forEach(element => {
        const role = element.getRole();

        // Based on the specified role, will call a function that will add the html content from the specified variables
        switch(role){
            case "Manager":
                cardBody = cardBody.concat(addManagerContent(element));
                break;

                case "Engineer":
                    cardBody = cardBody.concat(addEngineerContent(element));
                    break;

                case "Intern":
                    cardBody = cardBody.concat(addInternContent(element));
                    break;
        }
    })

    // Append all cards to the rest of the html content and css content to separate file
    const htmlFile = renderHtmlPage(cardBody);
    const cssFile = renderCssPage();

    // Write to file to create the html file, and css
    writeToFile("./dist/index.html", htmlFile);
    writeToFile("./dist/style.css", cssFile);
}

// HTML content for the manager class
function addManagerContent(manager){
    return `<div class="col-9 col-sm-7 col-md-6 col-lg-4 card-numb-1 text-center mb-5">
    <div class="card mx-auto" style="width: 300px;">
        <div class="card-body bg-primary text-white">
            <h5 class="card-title">${manager.employeeName}</h5>
            <h6 class="card-text">
            <span style="font-size: 1em; margin-right:1em;">
            <i class="fas fa-coffee"></i>
          </span>
            Manager</h6>
        </div>
        <ul class="list-group list-group-flush text-start">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: ${manager.email}</li>
            <li class="list-group-item">Ofiice: ${manager.office}</li>
        </ul>
    </div>
</div>`
}

// HTML content for the Engineer class
function addEngineerContent(engineer){
    return `<div class="col-9 col-sm-7 col-md-6 col-lg-4 card-numb-1 text-center mb-5">
    <div class="card mx-auto" style="width: 300px;">
        <div class="card-body bg-primary text-white">
            <h5 class="card-title">${engineer.employeeName}</h5>
            <h6 class="card-text">
            <span style="font-size: 1em; margin-right:1em;">
            <i class="fas fa-glasses"></i>
          </span>
            Engineer</h6>
        </div>
        <ul class="list-group list-group-flush text-start">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: ${engineer.email}</li>
            <li class="list-group-item">Github: ${engineer.github}</li>
        </ul>
    </div>
</div>`
}

// HTML content for the Intern class
function addInternContent(intern){
    return `<div class="col-9 col-sm-7 col-md-6 col-lg-4 card-numb-1 text-center mb-5">
    <div class="card mx-auto" style="width: 300px;">
        <div class="card-body bg-primary text-white">
            <h5 class="card-title">${intern.employeeName}</h5>
            <h6 class="card-text">
            <span style="font-size: 1em; margin-right:1em;">
            <i class="fas fa-user-graduate"></i>
          </span>
            Intern</h6>
        </div>
        <ul class="list-group list-group-flush text-start">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: ${intern.email}</li>
            <li class="list-group-item">School: ${intern.school}</li>
        </ul>
    </div>
</div>`
}

// Contains all html needed with the body passed to this function as a paramenter
function renderHtmlPage(body){
   return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
            integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
        <link rel="resetSheet" href="./reset.css" />
        <link rel="styleSheet" href="./style.css" />
        <title>Assembled Team</title>
    </head>
    
    <body class="container-fluid">
        <header class="row">
            <div class="col-12 bg-danger text-white text-center headerRow">
                <h1 class="">My Team</h1>
            </div>
        </header>
    
        <main class="row mt-5 justify-content-center">
        ${body}
        </main>
        </body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
    crossorigin="anonymous"></script>

</html>`
}

function renderCssPage(){
    return `.headerRow{
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    @media only screen and (min-width: 1800px) {
        .card {
          width: 500px!important;
        }
      }`
 }

// Will initiate the menu option
menu();