let people = [
  { name: 'Alice', age: 21},
  { name: 'Max', age: 20},
  { name: 'Jane', age: 20}
]

function groupBy(arr) {
  let check = {}
  
  arr.forEach(item => {
    if(!check[item.age]) {
      check[item.age] = [item]
    } else {
      check[item.age].push(item)
    }
  })
  
  let entries = Object.entries(check)
  entries.forEach(entry => {
    entry[1].sort((a,b) => a.name.localeCompare(b.name))
  })

  return check
}

console.log(groupBy(people))