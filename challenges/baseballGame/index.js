/*
  Integer x new score of x.
  "+" - Record a new score that is the sum of the previous two scores. 
  "D" - Record a new score that is double the previous score. 
  "C" - Invalidate the previous score, removint it from the record.
  return the sum of the scores
*/

const baseballGame = (ops) => {
  let opsArray = [...ops]
  let scores = []

  for(let i=0; i < opsArray.length; i++){
    if(Number.isNaN(Number(opsArray[i]))){
      if (opsArray[i] == '+'){
        let sum = scores[scores.length - 1] + scores[scores.length - 2]
        scores.push(sum)
      }
      if (opsArray[i] == 'D'){
        let double = scores[scores.length - 1] * 2
        scores.push(double)
      }
      if (opsArray[i] == 'C'){
        scores.pop()
      }
    }
    else {
      scores.push(Number(opsArray[i]))
    }
  }

  let result = 0
  scores.forEach(elem => {
    result += elem
  })
  return result
}

let result = baseballGame(["5","2","C","D","+"])
console.log(result)

result = baseballGame(["5","-2","4","C","D","9","+","+"])
console.log(result)

result = baseballGame(["1","C"])
console.log(result)
/*
Input: ops = ["5","2","C","D","+"]
Output: 30
Explanation:
"5" - Add 5 to the record, record is now [5].
"2" - Add 2 to the record, record is now [5, 2].
"C" - Invalidate and remove the previous score, record is now [5].
"D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
"+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
The total sum is 5 + 10 + 15 = 30.
Example 2:

Input: ops = ["5","-2","4","C","D","9","+","+"]
Output: 27
Explanation:
"5" - Add 5 to the record, record is now [5].
"-2" - Add -2 to the record, record is now [5, -2].
"4" - Add 4 to the record, record is now [5, -2, 4].
"C" - Invalidate and remove the previous score, record is now [5, -2].
"D" - Add 2 * -2 = -4 to the record, record is now [5, -2, -4].
"9" - Add 9 to the record, record is now [5, -2, -4, 9].
"+" - Add -4 + 9 = 5 to the record, record is now [5, -2, -4, 9, 5].
"+" - Add 9 + 5 = 14 to the record, record is now [5, -2, -4, 9, 5, 14].
The total sum is 5 + -2 + -4 + 9 + 5 + 14 = 27.
Example 3:

Input: ops = ["1","C"]
Output: 0
Explanation:
"1" - Add 1 to the record, record is now [1].
"C" - Invalidate and remove the previous score, record is now [].
Since the record is empty, the total sum is 0.
*/