const Employee = require("./Employee");

class Manager extends Employee {
    constructor(office){
        super(employeeName, id, email);
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