const { humanCatDogYears } = require("../src");

// Look Ma, no handlebars!!!
describe("humanCatDogYears", () => {
  it("return human years in cat & dog years", () => {
    expect(humanCatDogYears(40)).toEqual([40, 176, 214]);
    expect(humanCatDogYears(1)).toEqual([1, 15, 15]);
    expect(humanCatDogYears(2)).toEqual([2, 24, 24]);
  });
});
