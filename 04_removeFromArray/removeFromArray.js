const removeFromArray = function(toRemoveArray, ...toBeRemoved) {
    for (i = 0; i < toBeRemoved.length; i++) {
        for (j = 0; j < toRemoveArray.length; j++) {
            if (toRemoveArray[j] === toBeRemoved[i]) {
                toRemoveArray.splice (j,1);
                j--;
            }
        }
    }
    return toRemoveArray;
};

console.log(removeFromArray([1, 2, 2, 3], 2))

// // Do not edit below this line
module.exports = removeFromArray;
