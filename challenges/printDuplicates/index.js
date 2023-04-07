let a = [1,1,5,6,7,7,8,9,3,4,4]

function removeDuplicates(arr) {
  let result = arr.filter((item, index) => {
    return arr.indexOf(item) !== index
  })
  return result
}

console.log(removeDuplicates(a))