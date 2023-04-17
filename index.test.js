import { capitalizeFirstLetter, reverseString, calculator } from "./index";

// TEST #1
test("capitalize first letter of string", () => {
  // Define test parameters
  const string = "jest is cool";
  const result = capitalizeFirstLetter(string);
  // Perform test
  expect(result).toMatch(/^[A-Z].*/);
});

// TEST #2
test("function should return a string reversed", () => {
  // Define test parameters
  const input = "I like Jest";
  const result = reverseString(input);

  // Perform test
  expect(result).toBe("tesJ ekil I");
});

// TEST #3
test("calculator object to perform all basic math operations", () => {
  // Define test parameters
  const additionInput = calculator.addition(2, 2);
  const subtractionInput = calculator.subtraction(2, 2);
  const divisionInput = calculator.division(2, 2);
  const multiplicationInput = calculator.multiplication(2, 2);

  // Perform test
  expect(additionInput).toBe(4);
  expect(subtractionInput).toBe(0);
  expect(divisionInput).toBe(1);
  expect(multiplicationInput).toBe(4);
});
