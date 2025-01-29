const convertToCelsius = function(fahrenheitTemp) {
  return Math.round((fahrenheitTemp - 32) * 5/9 * 10) / 10;
};

const convertToFahrenheit = function(CelsiusTemp) {
  return Math.round((CelsiusTemp * 9/5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
