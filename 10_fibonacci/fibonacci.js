const fibonacci = function(n) {
    if (n < 0) return "OOPS";
    
    fibo = [0,1];
    for (let i = 2; i <= n; i++) {
        fibo.push (fibo[i-2] + fibo [i-1])
    }
    return fibo[n]
};

// Do not edit below this line
module.exports = fibonacci;
