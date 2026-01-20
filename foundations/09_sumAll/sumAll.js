const sumAll = function (left, right) {
    if (!Number.isInteger(left) || !Number.isInteger(right)) return "ERROR";
    if (left <= 0 || right <= 0) return "ERROR";
    if (left > right) [left, right] = [right, left];
    return (left + right) * (right - left + 1) / 2;
};

// Do not edit below this line
module.exports = sumAll;
