function isRegExp(value) {
    return value instanceof RegExp;
}

// Example usage:
console.log("IsRegExp (/abc/):", isRegExp(/abc/));  // true
console.log("IsRegExp ('/abc/'):", isRegExp('/abc/'));  // false
