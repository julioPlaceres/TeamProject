const Intern = require('../lib/Intern');

describe("Engineer", () =>{
    describe("Initialization", () =>{
        it("should instantiate the Engineer class", () => {
            const eTest = new Intern();

            expect(typeof(eTest)).toBe("object");
        });
    });
    describe("Setters", () =>{
        it("Set ID via constructor", () =>{
            const id = 123;
            const eTest = new Intern(id);

            expect(eTest.id).toBe(id);
        });
        it("set name via constructor", () => {
            const name = "Julio";
            const eTest = new Intern(123, name);

            expect(eTest.employeeName).toBe(name);
        })
        it("set email via constructor", () => {
            const email = "jplaceresvaldes@outlook.com";
            const eTest = new Intern(123, "Julio", email);

            expect(eTest.email).toBe(email);
        });
        it("Get school name via getSchool() method", () =>{
            const school = "UCF"
            const eTest = new Intern(123, "Julio", "myemail@email.com", school);

            expect(eTest.getSchool()).toBe(school);
        });
        it("Get Role via getRole() method", () =>{
            const eTest = new Intern();

            expect(eTest.getRole()).toBe("Intern");
        });
    });
});