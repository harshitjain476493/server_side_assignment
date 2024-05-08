function swapCase(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }
    return result;
}

// Example usage:
const inputString = "Hello World";
const swappedString = swapCase(inputString);
console.log("Original string:", inputString);
console.log("Swapped case string:", swappedString);
