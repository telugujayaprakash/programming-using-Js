//binary search
function binary(key, arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === key) {
      return "Key found";
    } else if (arr[mid] > key) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return "Element not found";
}

const arr = [2, 3, 5, 7, 8];
console.log(binary(5, arr));
