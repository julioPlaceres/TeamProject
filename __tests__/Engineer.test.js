const Engineer = require('../lib/Engineer');

describe("Engineer", () =>{
    describe("Initialization", () =>{
        it("should instantiate the Engineer class", () => {
            const eTest = new Engineer();

            expect(typeof(eTest)).toBe("object");
        });
    });
    describe("Setters", () =>{
        it("Set ID via constructor", () =>{
            const id = 123;
            const eTest = new Engineer(id);

            expect(eTest.id).toBe(id);
        });
        it("set name via constructor", () => {
            const name = "Julio";
            const eTest = new Engineer(123, name);

            expect(eTest.employeeName).toBe(name);
        })
        it("set email via constructor", () => {
            const email = "jplaceresvaldes@outlook.com";
            const eTest = new Engineer(123, "Julio", email);

            expect(eTest.email).toBe(email);
        })
    })
});