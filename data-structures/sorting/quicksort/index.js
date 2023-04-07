function quickSort(arr) {
  const n = arr.length;
  if (n <= 1) {
    return arr;
  }
  const pivotIndex = Math.floor(Math.random() * n);
  const pivot = arr[pivotIndex];
  const left = [];
  const right = [];
  for (let i = 0; i < n; i++) {
    if (i !== pivotIndex) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}