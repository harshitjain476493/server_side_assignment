// Write a JavaScript program to find all the index positions of a given word within a given string.
function findAllIndexes(mainString, subString) {
    let indexes = [];
    let index = mainString.indexOf(subString);
    while (index !== -1) {
        indexes.push(index);
        index = mainString.indexOf(subString, index + 1);
    }
    return indexes;
}

// Example usage:
const mainString = "hello world hello hello";
const subString = "hello";
const indexes = findAllIndexes(mainString, subString);
console.log("Indexes of '" + subString + "' in '" + mainString + "':", indexes);
