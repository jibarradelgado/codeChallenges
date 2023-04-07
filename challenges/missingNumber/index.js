let a = [2, 7, 8, 5, 1, 4, 3, 6]

function missing(arr) {
  let l = arr.length
  let sum = 1
  for (let i = 2; i < l; i++) {
    sum = sum + 1
    sum = sum - arr[i - 2]
  }
  return sum
}

console.log(missing(a))