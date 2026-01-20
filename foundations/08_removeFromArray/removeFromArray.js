const removeFromArray = function (arr, ...remList) {
    return arr.filter(item => !remList.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
