const Employee = require("./Employee");

class Manager extends Employee {
    constructor(id, employeeName, email, office){
        super(id, employeeName, email);
        this.office = office;
    }

    getOffice(){
        return this.office;
    }

    getRole(){
        return "Manager";
    }
}



module.exports = Manager;