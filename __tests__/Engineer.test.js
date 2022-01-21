const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const emp = new Engineer(5, "Taco", "msvillarreal2021gmail.com", testValue);
  expect(emp.github).toBe(testValue);
});

test("getRole() should return Engineer", () => {
  const testValue = "Engineer";
  const emp = new Engineer(5, "Taco", "msvillarreal2021@gmail.com", "GitHubUser");
  expect(emp.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const emp = new Engineer(5, "Taco", "msvillarreal2021@gmail.com", testValue);
  expect(emp.getGithub()).toBe(testValue);
});