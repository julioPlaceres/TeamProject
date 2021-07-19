const Employee = require('../lib/Employee');

describe("Employee", () =>{
    describe("Initialization", () =>{
        it("should set an object with the properties 'name', 'id', 'email' when created", () => {
            const employeeTest = {
                employeeName:"julio",
                id: 125,
                email: "jplaceresvaldes@outlook.com"
            }

            const obj = new Employee(employeeTest.employeeName, employeeTest.id, employeeTest.email);
            expect(obj).toEqual(employeeTest);
        });
    });
});