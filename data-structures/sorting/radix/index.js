function radixSort(arr) {
  const maxNum = Math.max(...arr) * 10;
  let divisor = 10;
  while (divisor < maxNum) {
    // Create bucket arrays for each of 0-9
    let buckets = [...Array(10)].map(() => []);

    // For each number, get the current digit and put it in the correct bucket
    for (let num of arr) {
      buckets[Math.floor((num % divisor) / (divisor / 10))].push(num);
    }

    // Reconstruct the array by concatenating all sub arrays in the buckets
    arr = [].concat.apply([], buckets);
    divisor *= 10;
  }
  return arr;
}
