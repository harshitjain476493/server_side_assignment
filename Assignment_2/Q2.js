// Write a JavaScript program to find the first index of a given element in an array using the linear search algorithm.
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

const arr = [3, 6, 8, 2, 9, 4];
const target = 8;
const index = linearSearch(arr, target);
console.log(index);
