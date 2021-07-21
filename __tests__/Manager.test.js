const Manager = require('../lib/Manager');

describe("Manager", () =>{
    describe("Initialization", () =>{
        it("should instantiate the Manager class", () => {
            const eTest = new Manager();

            expect(typeof(eTest)).toBe("object");
        });
    });
    describe("Setters", () =>{
        it("Set ID via constructor", () =>{
            const id = 123;
            const eTest = new Manager(id);

            expect(eTest.id).toBe(id);
        });
        it("set name via constructor", () => {
            const name = "Julio";
            const eTest = new Manager(123, name);

            expect(eTest.employeeName).toBe(name);
        })
        it("set email via constructor", () => {
            const email = "jplaceresvaldes@outlook.com";
            const eTest = new Manager(123, "Julio", email);

            expect(eTest.email).toBe(email);
        });
        it("Get office number via getOffice() method", () =>{
            const office = 789
            const eTest = new Manager(123, "Julio", "myemail@email.com", office);

            expect(eTest.getOffice()).toBe(office);
        });
        it("Get Role via getRole() method", () =>{
            const eTest = new Manager();

            expect(eTest.getRole()).toBe("Manager");
        });
    });
});