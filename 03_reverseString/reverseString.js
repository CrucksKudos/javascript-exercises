const reverseString = function(word) {
    let finalString = "";
    for (i = word.length - 1; i >= 0; i--)  {
        finalString += word.charAt(i);
    }
    return finalString;
};

// Do not edit below this line
module.exports = reverseString;
