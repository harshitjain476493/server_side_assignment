// Write a JavaScript program to sort the characters in a string alphabetically.
function sortString(str) {
    return str.split('').sort().join('');
}

const inputString = "javascript";
const sortedString = sortString(inputString);
console.log("Sorted string:", sortedString);
