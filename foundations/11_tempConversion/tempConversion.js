const convertToCelsius = function(temp) {
  let convertTemp = (temp - 32) * 5/9;
  convertTemp = Math.round(convertTemp * 10) / 10;
  return convertTemp;
};

const convertToFahrenheit = function(temp) {
  let convertTemp = (temp * 9/5) + 32;
  convertTemp = Math.round(convertTemp * 10) / 10;
  return convertTemp;
};

console.log()

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

// Steps
// 1. Find C and F formalae. C is (x * 9/5) + 32. F is (x - 32) * 5/9.
// 2. Run argument through formalae and return result
// 3. Check to see if it works with negative numbers