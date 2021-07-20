const Employee = require('../lib/Employee');

describe("Employee", () =>{
    describe("Initialization", () =>{
        it("should instantiate the Employee class", () => {
            const eTest = new Employee();

            expect(typeof(eTest)).toBe("object");
        });
    });
    describe("Setters", () =>{
        it("Set ID via constructor", () =>{
            const id = 123;
            const eTest = new Employee(id);

            expect(eTest.id).toBe(id);
        });
        it("set name via constructor", () => {
            const name = "Julio";
            const eTest = new Employee(123, name);

            expect(eTest.employeeName).toBe(name);
        })
        it("set email via constructor", () => {
            const email = "jplaceresvaldes@outlook.com";
            const eTest = new Employee(123, "Julio", email);

            expect(eTest.email).toBe(email);
        });
    });
});

