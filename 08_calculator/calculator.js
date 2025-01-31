const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
	return array.reduce((total, itemValue) => total += itemValue, 0);
};

const multiply = function(array) {
	return array.reduce((total, itemValue) => total *= itemValue, 1);
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(n) {
  let product = 1
  for (let i = 1; i <= n; i++) {
    product *= i;
  }
	return product
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
