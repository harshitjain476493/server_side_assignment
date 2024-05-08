function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}

// Example usage:
console.log("IsNumber (123):", isNumber(123));  // true
console.log("IsNumber ('123'):", isNumber('123'));  // false
console.log("IsNumber (NaN):", isNumber(NaN));  // false
