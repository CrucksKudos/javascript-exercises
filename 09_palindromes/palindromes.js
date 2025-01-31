const palindromes = function (string) {
    const onlyAlpha = [... string].filter(char => /[^\W_]/.test(char)).join('').toLowerCase();
    console.log(onlyAlpha);
    for (let i = 0; i < onlyAlpha.length / 2; i++) {
        if (onlyAlpha[i] !== onlyAlpha[onlyAlpha.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
