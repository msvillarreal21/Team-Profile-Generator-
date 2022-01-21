const Manager = require("../lib/Manager");

test("Can set office number via constructor argument", () => {
  const testValue = 500;
  const emp = new Manager(5, "Taco", "msvillareral2021@gmail.com", testValue);
  expect(emp.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const emp = new Manager(5, "Taco", "msvillareral2021@gmail.com", 500);
  expect(emp.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const emp = new Manager(5, "Taco", "msvillareral2021@gmail.com", testValue);
  expect(emp.getOfficeNumber()).toBe(testValue);
});