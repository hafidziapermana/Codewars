var items = [
  {
    name: 'Edward',
    value: 21
  }, {
    name: 'Sharpe',
    value: 37
  }, {
    name: 'And',
    value: 45
  }, {
    name: 'The',
    value: -12
  }, {
    name: 'Magnetic',
    value: 13
  }, {
    name: 'Zeros',
    value: 37
  }
];

// Sort by value
const sortedAsc = items.sort((a, b) => a.value - b.value)
const sortedDsc = items.sort((a, b) => b.value - a.value)
// -----------------------------------------------------------------------
// Find middle numb
var gimme = function(inputArray) {
  let sorted = inputArray.sort((a, b) => a - b)
  return sorted[1]
};

function gimme(a) {
  return a.indexOf(a.concat().sort(function(a, b) {
    return a - b
  })[1])
}
// ----------------------------------------------------------------------
// Square Every Digit
function squareDigits(num) {
  let isString = String(num)
  let isArray = isString.split('')
  let isSquared = isArray.map((i) => i * i)
  let isJoined = isSquared.join('')
  let isNumber = parseInt(isJoined)
  return isNumber
}
squareDigits(123)
// ---------------------------------------------------------------------
// Maximum Length Difference
var a1 = [
  "hoqq",
  "bbllkw",
  "oox",
  "ejjuyyy",
  "plmiis",
  "xxxzgpsssa",
  "xxwwkktt",
  "znnnnfqknaz",
  "qqquuhii",
  "dvvvwz"
];
var a2 = ["cccooom  maaqqoxii", "gggqaffhhh", "tttoowwwmmww"];

function mxdiflg(a1, a2) {
  let isConcate = a1.concat(a2)
  let normalize = isConcate.map((item) => item.split(','))
  let findLength = normalize.map((item) => item.length)
  let sortedString = findLength.sort((a, b) => a - b)
  let findLastIndex = sortedString.length
  let lastIndex = sortedString[findLastIndex - 1]
  let firstIndex = sortedString[0]
  let maxDiff = (lastIndex - firstIndex)

  if (a1.length === 0 && a2.length === 0) {
    return -1
  } else if (a1.length === 0 || a2.length === 0) {
    return -1
  } else
    return maxDiff
}
mxdiflg(a1, a2)
// --------------------------------------------------------------------
const arr = [
  3,
  5,
  3,
  'sdd',
  453,
  1
]
const arr1 = [
  {
    name: 'hafidz',
    gender: 'male',
    nationality: 'indonesia'
  }, {
    name: 'ilham',
    gender: 'male',
    nationality: 'saudi arabia'
  }, {
    name: 'aji',
    gender: 'female',
    nationality: 'malaysia'
  }
]
const arr2 = {
  focal_length: '18mm',
  aperture: 'f/8',
  brand: 'canon'
}

let res = [
  ...arr1,
  arr2
]
console.log(res)
// -------------------------------------------------------------------
