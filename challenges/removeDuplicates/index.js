let a = [1, 2, 3, 4, 3, 6, 5, 4]

function unique(arr) {
  // let items = {}

  // arr.forEach((item) => {
  //   if(!items[item]) {
  //     items[item] = item
  //   }
  // })

  let items = new Set([...arr])

  return items.values()
}

console.log(unique(a))