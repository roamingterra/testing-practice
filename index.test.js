import {
  capitalizeFirstLetter,
  reverseString,
  calculator,
  caesarCipher,
} from "./index.js";

// TEST #1
test.skip("capitalize first letter of string", () => {
  // Define test parameters
  const string = "jest is cool";
  const result = capitalizeFirstLetter(string);
  // Perform test
  expect(result).toMatch(/^[A-Z].*/);
});

// TEST #2
test.skip("function should return a string reversed", () => {
  // Define test parameters
  const input = "I like Jest";
  const result = reverseString(input);

  // Perform test
  expect(result).toBe("tseJ ekil I");
});

// TEST #3
test.skip("calculator object to perform all basic math operations", () => {
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

// TEST #4
test("shift all letters of a string by one letter", () => {
  const input1 = "Defend z east wall of z castle!";
  const shift1 = 1;
  const cipherText1 = caesarCipher(input1, shift1);
  expect(cipherText1).toBe("Efgfoe a fbtu xbmm pg a dbtumf!");

  const input2 = "a";
  const shift2 = 26;
  const cipherText2 = caesarCipher(input2, shift2);
  expect(cipherText2).toBe("a");

  const input3 = "A";
  const shift3 = 26;
  const cipherText3 = caesarCipher(input3, shift3);
  expect(cipherText3).toBe("A");

  const input4 = "a";
  const shift4 = 52;
  const cipherText4 = caesarCipher(input4, shift4);
  expect(cipherText4).toBe("a");
});
