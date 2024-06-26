// Write a JavaScript program to sort a list of elements using Quick sort.
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else if (arr[i] > pivot) {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage:
const unsortedArray = [7, 2, 1, 6, 8, 5, 3, 4];
const sortedArray = quickSort(unsortedArray);
console.log("Sorted Array:", sortedArray);
