const Engineer = require('../lib/Engineer');

describe("Engineer", () =>{
    describe("Initialization", () =>{
        it("should set an object with the properties 'name', 'id', 'email', 'github' when created", () => {
            const engineerTest = {
                employeeName:"julio",
                id: 125,
                email: "jplaceresvaldes@outlook.com",
                github: "julioPlaceres"
            }

            const obj = new Engineer(engineerTest.empl, engineerTest.id, engineerTest.email, engineerTest.github);
            expect(obj).toEqual(engineerTest);
        });
    });
});