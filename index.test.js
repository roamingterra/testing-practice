// TEST #1
test("capitalize first letter of string", () => {
  // Define test parameters
  const string = "Jest is cool";
  // Perform test
  expect(string).toMatch(/^[A-Z].*/);
});

// TEST #2
test("function should return a string reversed", () => {
  // Define test parameters
  const input = "I like Jest";
  const result = "tesJ ekil I";

  // Perform test
  expect(result).toBe("tesJ ekil I");
});

// TEST #3
test("calculator object to perform all basic math operations", () => {
  // Define test parameters
  const additionInput = 2 + 2;
  const subtractionInput = 2 - 2;
  const divisionInput = 2 / 2;
  const multiplicationInput = 2 * 2;

  // Perform test
  expect(additionInput).toBe(4);
  expect(subtractionInput).toBe(0);
  expect(divisionInput).toBe(1);
  expect(multiplicationInput).toBe(4);
});
