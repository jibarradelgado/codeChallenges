let a = [1, 3, 4, 6, 7, 8, 10]

function missing(arr) {
  let missing = []
  for(let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] != 1 && arr[i + 1] != undefined) {
      missing.push(arr[i] + 1)
    }
  }
  return missing
}

console.log(missing(a))