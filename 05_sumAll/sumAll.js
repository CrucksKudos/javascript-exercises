const sumAll = function(number1, number2) {
    if (!(Number.isInteger(number1) && Number.isInteger(number2)) || number1 < 0 || number2 < 0 ) {
        return "ERROR";
    }
    let sum = 0;
    if (number1 < number2) {
        for (i = number1; i <= number2; i++){
            sum += i;
        }
    }
    else if (number2 < number1) {
        for (i = number2; i <= number1; i++){
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
