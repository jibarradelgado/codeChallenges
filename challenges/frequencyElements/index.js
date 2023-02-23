let arr = ["hello", "world", "java", "hello", "java"]

function countWord(p) {
  let result = p.reduce((allNames, name) => {
    if (name in allNames) {
      allNames[name]++
    } else {
      allNames[name] = 1
    }
    return allNames
  }, {})

  const sorted = Object.entries(result).sort(([,a],[,b]) => a - b).reduce((r, [k, v]) => ({ ...r, [k]: v}), {})

  return sorted
}

console.log(countWord(arr))