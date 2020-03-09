const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  // how do we create specs again???
  it("returns yes when passed a true boolean value", () => {
    expect(booleanToWord(true)).toBe("Yes");
    expect(booleanToWord(2 > 1)).toBe("Yes");
    expect(booleanToWord(420)).toBe("Yes");
  });
  it("returns no when passed a false boolean value", () => {
    expect(booleanToWord(false)).toBe("No");
    expect(booleanToWord(2 < 1)).toBe("No");
    expect(booleanToWord(0)).toBe("No");
  });
});
