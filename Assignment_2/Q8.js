// Write a JavaScript program to sort the characters in a string alphabetically.
function isArraySorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [5, 1, 2, 3, 4];

console.log("Is array1 sorted?", isArraySorted(array1));
console.log("Is array2 sorted?", isArraySorted(array2));
