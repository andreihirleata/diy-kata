const { getEmployerRole } = require("../src");
const employees = [
  {
    name: "Andrei",
    role: "Student"
  },
  {
    name: "Jim",
    role: "Teacher"
  },
  {
    name: "Tim",
    role: "Student"
  }
];
describe("getEmployerRole", () => {
  test("returns the employee's role in the company", () => {
    expect(getEmployerRole("Andrei", employees)).toEqual("Student");
    expect(getEmployerRole("Jim", employees)).toEqual("Teacher");
  });
});
