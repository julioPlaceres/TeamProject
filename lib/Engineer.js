const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(id, employeeName, email, github){
        super(id, employeeName, email);
        this.github = github;
    }

    getGithub(){
        return this.github;
    }

    getRole() {
        return "Engineer";
    } 
}

module.exports = Engineer;