function splitStringIntoWords(str) {
    // Split the string into an array of words using whitespace as the delimiter
    return str.split(/\s+/);
}

// Example usage:
const inputString = "This is an input string to check";
const wordsArray = splitStringIntoWords(inputString);
console.log(wordsArray);
