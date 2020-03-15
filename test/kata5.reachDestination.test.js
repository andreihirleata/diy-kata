const { reachDestination } = require("../src");

describe("reachDestination", () => {
  it("returns string with estimated time of arrival", () => {
    expect(reachDestination(100, 10)).toEqual("I should be there in 10 hours");
    expect(reachDestination("stringTest", 1)).toEqual("Input is not a number");
    expect(reachDestination(44, 10)).toEqual("I should be there in 4.5 hours");
    expect(reachDestination(22.2, 3.2)).toEqual("I should be there in 7 hours");
  });
});
