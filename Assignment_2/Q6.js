// Write a JavaScript program to sort a list of elements using Insertion sort
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

const unsortedArray = [7, 2, 1, 6, 8, 5, 3, 4];
const sortedArray = insertionSort(unsortedArray);
console.log("Sorted Array (Insertion Sort):", sortedArray);
