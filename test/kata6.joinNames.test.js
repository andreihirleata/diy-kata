const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(
      joinNames([
        {
          name: "dan",
          age: 10
        },
        { name: "anon", hobby: "test" },
        { name: "carrie" }
      ])
    ).toEqual("dan, anon & carrie");
    expect(
      joinNames([
        {
          name: "Andrei"
        }
      ])
    ).toEqual("Andrei");
  });
});
