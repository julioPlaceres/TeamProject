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
            const email = "myemail@email.com";
            const eTest = new Engineer(123, "Julio", email);

            expect(eTest.email).toBe(email);
        });
    });
    describe("Testing methods", () =>{
        it("Get the name via getNamme() method", () =>{
            const id = 123;
            const eTest = new Engineer(id);

            expect(eTest.getId()).toBe(id);
        });
        it("Get Id via getId() method", () =>{
            const name = "Julio";
            const eTest = new Engineer(123, name)

            expect(eTest.getName()).toBe(name);
        });
        it("Get email via getEmail() method", () =>{
            const email = "myemail@email.com";
            const eTest = new Engineer(123, "Julio", email);

            expect(eTest.getEmail()).toBe(email);
        });
        it("Get Github userName via getGithub() method", () =>{
            const github = "julioPlaceres"
            const eTest = new Engineer(123, "Julio", "myemail@email.com", github);

            expect(eTest.getGithub()).toBe(github);
        });
        it("Get Role via getRole() method", () =>{
            const eTest = new Engineer();

            expect(eTest.getRole()).toBe("Engineer");
        });
    });
});