'use strict';

/*
 * Complete the 'palindromeIndex' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */
function isPalindrome(s) {
    let original = s.split('')
    const length = Math.floor(s.length/2)
    for(let i = 0; i < length; i++){
        if(original[i] != original[original.length - 1 - i])
            return i
    }
    return -1
}

function palindromeIndex(s) {
    // Write your code here
    const index = isPalindrome(s)

    if (index == -1) return -1

    let modified = s.slice(0, index) + s.slice(index + 1)
    console.log(modified)

    const newIndex = isPalindrome(modified)
    if (newIndex != -1) return s.length - index - 1
    else return index
}

let index = palindromeIndex("aaab")
console.log(index)

index = palindromeIndex("baa")
console.log(index)

index = palindromeIndex("aaa")
console.log(index)