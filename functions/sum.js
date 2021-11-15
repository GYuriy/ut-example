function sum(a, b) {
    if (typeof a !== "number") {
        return "Param should be a number";
    }
    return a + b;
}

module.exports = sum;
