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

export { capitalizeFirstLetter, reverseString, calculator };
