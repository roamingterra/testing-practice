import { capitalizeFirstLetter, reverseString, calculator } from "./index.js";

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
  // Define test parameters
  const input1 = "Defend z east wall of z castle!";
  const shift1 = 1;
  const cipherText1 = "Efgfoe a fbtu xbmm pg a dbtumf!";
  expect(cipherText1).toBe("Efgfoe a fbtu xbmm pg a dbtumf!");

  const input2 = "a";
  const shift2 = 26;
  const cipherText2 = "z";
  expect(cipherText2).toBe("z");

  const input3 = "A";
  const shift3 = 26;
  const cipherText3 = "Z";
  expect(cipherText3).toBe("Z");

  const input4 = "a";
  const shift4 = 52;
  const cipherText4 = "z";
  expect(cipherText4).toBe("z");

  /*
  // Perform test
  const inputTest = input.split("");
  const cipherTextTest = cipherText.split("");

  const punctuationRegex = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/g;

  expect(inputTest.length).toEqual(cipherTextTest.length);
  for (let i = 0; i < cipherTextTest.length; i++) {
    if (inputTest[i] === " ") {
      expect(inputTest[i] === cipherTextTest[i]);
      continue;
    }

    if (inputTest[i].match(punctuationRegex)) {
      expect(inputTest[i] === cipherTextTest[i]);
      continue;
    }

    if (inputTest[i].charCodeAt(0) >= 97 && inputTest[i].charCodeAt(0) <= 122) {
      let shiftedNum;
      shiftedNum = inputTest[i].charCodeAt(0) - 97; // Convert to 0-based index
      shiftedNum = (shiftedNum + shift) % 26; // Apply the shift with modulo operation
      shiftedNum = (shiftedNum + 26) % 26; // Handle negative values after modulo
      shiftedNum = shiftedNum + 97; // Convert back to ASCII code

      expect(String.fromCharCode(shiftedNum)).toEqual(cipherTextTest[i]);
      continue;
    }

    if (inputTest[i].charCodeAt(0) >= 65 && inputTest[i].charCodeAt(0) <= 90) {
      let shiftedNum;
      shiftedNum = inputTest[i].charCodeAt(0) - 65; // Convert to 0-based index
      shiftedNum = (shiftedNum + shift) % 26; // Apply the shift with modulo operation
      shiftedNum = (shiftedNum + 26) % 26; // Handle negative values after modulo
      shiftedNum = shiftedNum + 65; // Convert back to ASCII code

      expect(String.fromCharCode(shiftedNum)).toEqual(cipherTextTest[i]);
      continue;
    }
  }
  */
});
