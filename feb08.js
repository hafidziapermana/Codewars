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
// -----------------------------------------------------------------------------
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
// -----------------------------------------------------------------------------
function dontGiveMeFive(start, end) {
  // loop over start - end 
  let arr = []
  for (let y = start; y <= end; y++) {
    arr.push(y)
  }
  // Find index of 5
  const index = arr.indexOf(5)
  
  if (index < 0) {
    return arr.length
  }
  
  if (index >= 0) {
    const removed = arr.splice(index, 1)
    return arr.length
  }
}

// console.log(dontGiveMeFive(-10,-1))
// console.log(dontGiveMeFive(-2,10))
// console.log(dontGiveMeFive(0,10))
// console.log(dontGiveMeFive(4,10))
// console.log(dontGiveMeFive(3,10))
// console.log(dontGiveMeFive(5,10))
// console.log(dontGiveMeFive(7,10))
// -----------------------------------------------------------------------------
function pickIt(arr){
  var odd=[],even=[];
  //coding here
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    }
    if (arr[i] % 2 !== 0) {
      odd.push(arr[i])
    }
  }
  return [odd,even];
}

const x = [8,1,5,4,6,1,1]
//console.log(pickIt(x))
var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange', 'letsgo'];
const fr = 'soccer team'
//console.log(fr.indexOf('team'))
/**
 * Array filters items based on search criteria (query)
 */
function filterItems(query) {
  return fruits.filter(function(el) {
      return el.indexOf(query) > -1;
  })
}

const input = ["codewars","javascript","java", "sds"]

function cutIt(array) {
  const oldArr = [...array]
  
  const isShortest = () => {
    return array.sort((a,b) => a.length - b.length)
          .shift()
          .length
  }
  const lastIndex = isShortest()
  
  const sliced = (lastIndex) => {
    return oldArr.map((word) => {
      return word.slice(0, lastIndex)
    })
  }
  return sliced(lastIndex)
}

console.log(cutIt(input))

