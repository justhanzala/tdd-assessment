const { add } = require("./string-calculator");

describe("String Calculator", () => {
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("should return the number for a single number", () => {
    expect(add("1")).toBe(1);
  });

  test("should return the sum of two comma-separated numbers", () => {
    expect(add("1,2")).toBe(3);
  });

  test("should return the sum of multiple comma-separated numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  test("should handle newlines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test("should handle mixed comma and newline delimiters", () => {
    expect(add("1,2\n3,4")).toBe(10);
  });

  test("should handle custom delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
  });
});
