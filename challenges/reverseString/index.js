/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
  let arrayLetters = s.split('')
  let reverseFullArray = [...arrayLetters].reverse()
  let reverseLetters = []
  
  reverseFullArray.forEach(x => {
    if (/[a-zA-Z]/.test(x)){
      reverseLetters.push(x)
    }
  })
  
  let count = 0;
  for(let i=0; i < arrayLetters.length; i++) {
    if(/[a-zA-Z]/.test(arrayLetters[i])) {
      arrayLetters[i] = reverseLetters[count]
      count++
    }
  }
  
  let result = arrayLetters.join('')
  
  console.log(result)

  return result
};

let s = "ab-cd";
reverseOnlyLetters(s)

s = "a-bC-dEf-ghIj"
reverseOnlyLetters(s)

s = "Test1ng-Leet=code-Q!"
reverseOnlyLetters(s)

// Example 1:

// Input: s = "ab-cd"
// Output: "dc-ba"

// Example 2:

// Input: s = "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"

// Example 3:

// Input: s = "Test1ng-Leet=code-Q!"
// Output: "Qedo1ct-eeLg=ntse-T!"