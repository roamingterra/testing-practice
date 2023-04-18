function capitalizeFirstLetter(string) {
  const capitalizedLetter = string.charAt(0).toUpperCase();
  const result = string.replace(string.charAt(0), capitalizedLetter);
  return result;
}
function reverseString(string) {
  const reversedString = string.split("").reverse().join("");
  return reversedString;
}

const calculator = {
  addition: function (num1, num2) {
    return num1 + num2;
  },
  subtraction: function (num1, num2) {
    return num1 - num2;
  },
  division: function (num1, num2) {
    return num1 / num2;
  },
  multiplication: function (num1, num2) {
    return num1 * num2;
  },
};

function caesarCipher(input, shiftFactor) {
  const inputTest = input.split("");
  const punctuationRegex = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/g;
  let result = [];

  for (let i = 0; i < inputTest.length; i++) {
    if (inputTest[i] === " ") {
      result.push(inputTest[i]);
    } else if (inputTest[i].match(punctuationRegex)) {
      result.push(inputTest[i]);
    } else if (
      inputTest[i].charCodeAt(0) >= 97 &&
      inputTest[i].charCodeAt(0) <= 122
    ) {
      let shiftedNum;
      shiftedNum = inputTest[i].charCodeAt(0) - 97; // Convert to 0-based index
      shiftedNum = (shiftedNum + shiftFactor) % 26; // Apply the shift with modulo operation
      shiftedNum = (shiftedNum + 26) % 26; // Handle negative values after modulo
      shiftedNum = shiftedNum + 97; // Convert back to ASCII code

      result.push(String.fromCharCode(shiftedNum));
    } else if (
      inputTest[i].charCodeAt(0) >= 65 &&
      inputTest[i].charCodeAt(0) <= 90
    ) {
      let shiftedNum;
      shiftedNum = inputTest[i].charCodeAt(0) - 65; // Convert to 0-based index
      shiftedNum = (shiftedNum + shiftFactor) % 26; // Apply the shift with modulo operation
      shiftedNum = (shiftedNum + 26) % 26; // Handle negative values after modulo
      shiftedNum = shiftedNum + 65; // Convert back to ASCII code

      result.push(String.fromCharCode(shiftedNum));
    }
  }
  result = result.join("");
  return result;
}

function analyzeArray(array) {
  const average =
    array.reduce(function (sum, value) {
      return sum + value;
    }, 0) / array.length;

  const min = array.reduce(function (acc, val) {
    return acc < val ? acc : val;
  });

  const max = array.reduce(function (acc, val) {
    return acc < val ? val : acc;
  });

  const length = array.length;

  return { average: average, min: min, max: max, length: length };
}

export {
  capitalizeFirstLetter,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
