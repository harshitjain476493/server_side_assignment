// Write a JavaScript program to sort a list of elements using Heap sort.
function heapSort(arr) {
    buildMaxHeap(arr);
    for (let i = arr.length - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, 0, i);
    }
    return arr;
}

function buildMaxHeap(arr) {
    const n = arr.length;
    for (let i = Math.floor(n / 2); i >= 0; i--) {
        heapify(arr, i, n);
    }
}

function heapify(arr, i, heapSize) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let largest = i;

    if (left < heapSize && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < heapSize && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, largest, heapSize);
    }
}


const unsortedArray = [7, 2, 1, 6, 8, 5, 3, 4];
const sortedArray = heapSort(unsortedArray);
console.log("Sorted Array (Heap Sort):", sortedArray);
