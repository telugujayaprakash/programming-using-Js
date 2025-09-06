const arr = [100, 44, 34, 56, 78, 101]
let largest = 0;
let secondLargest = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] < largest) {
        secondLargest = arr[i];
    }
}
console.log(secondLargest)