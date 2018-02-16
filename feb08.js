// 1st (1)   2nd (3)    3rd (6)
// *          **        ***
//            *         **
//                      *
// Return tringular number
function triangular( n ) {
  let sum = 0;
    for(i = 0; i<=n ; i++){
       sum += i;
    }
  return sum;
}

//console.log(triangular(4))

//Complete the solution so that it reverses all of the words within the string 
function reverseWords(str){
  const suffle = str
    .split(' ')
    .reverse()
  const normalize = suffle
    .join(' ')
  return normalize
}

const sentence = "The greatest victory is that which requires no battle"
//console.log(reverseWords(sentence))

function dontGiveMeFive(start, end) {
  // loop over start - end 
  let arr = []
  for (let y = start; y <= end; y++) {
    arr.push(y)
  }
  // Find index of 5
  arr
  const index = arr.indexOf(5)
  
  if (index < 0) {
    return arr.length
  }
  
  if (index >= 0) {
    const removed = arr.splice(index, 1)
    return arr.length
  }
}

console.log(dontGiveMeFive(6,10))