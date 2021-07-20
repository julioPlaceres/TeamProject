class Employee{
    constructor(id, employeeName, email){
        this.employeeName = employeeName;
        this.id = id;
        this.email = email;
    }

    getName(){
        return this.employeeName;
    }
    getId(){
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }    
}

module.exports = Employee;