function bubbleSort(arr) {
  const n = arr.length;

  // Loop through the array n times
  for (let i = 0; i < n; i++) {
    // We want to perform (n - i - 1) comparisons for each pass
    for (let j = 0; j < n - i - 1; j++) {
      // Swap the elements if they are in the wrong order
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}