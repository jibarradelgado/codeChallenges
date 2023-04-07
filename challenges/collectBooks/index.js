let friends = [{
  name: 'Anna',
  books: ['Bible', 'Harry Potter'],
  age: 21
}, {
  name: 'Bob',
  books: ['War and peace', 'Romeo and Juliet'],
  age: 26
}, {
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shinning'],
  age: 18
}]

let result = friends.reduce((pre, curr) => {
  return [...pre, ...curr.books]
}, [])

console.log(result)