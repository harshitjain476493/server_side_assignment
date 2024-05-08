//Write a JavaScript program to sort a list of elements using Bubble sort
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 1; i < n; i++) {
            if (arr[i - 1] > arr[i]) {
                [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
                swapped = true;
            }
        }
        n--;
    } while (swapped);
    return arr;
}

const unsortedArray = [7, 2, 1, 6, 8, 5, 3, 4];
const sortedArray = bubbleSort(unsortedArray);
console.log("Sorted Array (Bubble Sort):", sortedArray);
