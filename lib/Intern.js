const Employee = require("./Employee");

class Intern extends Employee{
    constructor(id, employeeName, email, school){
        super(id, employeeName, email)
        this.school = school;
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return "Intern";
    }
}



module.exports = Intern;