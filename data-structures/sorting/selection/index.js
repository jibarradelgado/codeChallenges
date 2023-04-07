function selectionSort(arr) {
  const n = arr.length;

  // Loop through the array n times
  for (let i = 0; i < n; i++) {
    // Find the minimum element in the unsorted portion of the array
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the minimum element with the first element of the unsorted portion
    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  return arr;
}