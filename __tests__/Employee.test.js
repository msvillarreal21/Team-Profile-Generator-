const { TestWatcher } = require("@jest/core");
const Employee = require("../lib/Employee");

//check if employee object is working 
test ('Can initiate employee', () => {
    const emp = new Employee();
    expect(typeof(emp)).toBe('object');
});

test('Can set an id', () => {
    testId = 5;
    const emp = new Employee(testId);
    expect(emp.id).toBe(testId);
});

test("id must be only numbers", () => {
    const emp = new Employee(5);
    expect(emp.id).toEqual(expect.any(Number));
});

test('Can set name with constructor arguments', () => {
    testName = "Taco";
    const emp = new Employee(5, testName);
    expect(emp.name).toEqual(testName);
});

test('Can set up email with const. arguements', () => {
    const testEmail = "msvillarreal2021@gmail.com";
    const emp = new Employee(5, 'Taco', testEmail);
    expect(emp.email).toEqual(expect.any(String));
});

test('Can get Id with getId()', () =>{
    const testValue = 5;
    const e = new Employee(testValue);
    expect(e.getId()).toBe(testValue);
});

test("Id must be numbers only", () => {
    const emp = new Employee(5);
    expect(emp.getId()).toEqual(expect.any(Number));
});

test("Can get name via getName()", () => {
    const testValue = "Taco";
    const emp = new Employee(5, testValue);
    expect(emp.getName()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
    const testValue = "msvillarreal2021@gmail.com";
    const emp = new Employee(5, "Taco", testValue);
    expect(emp.getEmail()).toBe(testValue);
});

test("check if email is a string", () => {
    const testValue = "msvillarreal2021@gmail.com";
    const emp = new Employee(5, "Taco", testValue);
    expect(emp.getEmail()).toEqual(expect.any(string));
});