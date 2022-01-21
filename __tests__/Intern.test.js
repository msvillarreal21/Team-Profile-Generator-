const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "UT";
  const emp = new Intern(5, "Taco", "msvillarreal2021@gmail.com", testValue);
  expect(emp.school).toBe(testValue);
}); `4`

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const emp = new Intern(5, "Taco", "msvillarreal2021@GMAIL.com", "UT");
  expect(emp.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UT";
  const emp = new Intern(5, "Taco", "MSVILLARREAL2021@GMAIL.com",  testValue);
  expect(emp.getSchool()).toBe(testValue);
});