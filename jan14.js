//******************************************************//
var arrayOfSheeps = [true,  true,  true,  false,
              true,  true,  true,  true ,
              true,  false, true,  false,
              true,  false, false, true ,
              true,  true,  true,  true ,
              false, false, true,  true ];


function countSheeps(arrayOfSheeps) {  
  var sheepsCounter = 0;
  for (var i = 0; i < arrayOfSheeps.length; i++) {
    if (arrayOfSheeps[i] == true) {
      sheepsCounter ++;
    }
  }
  return sheepsCounter;
}

//console.log(countSheeps(arrayOfSheeps))
//*******************************************************//
//Data
var bus = [[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]];

var busStop = (bus) => {
  var sum;
  var currentSum = 0;
  for (var i = 0; i < bus.length; i++) {
    sum = bus[i][0]-bus[i][1];
    currentSum += sum;
  }
  return currentSum;
}
//*******************************************************//
var summation = function(num) {
  var currentSum;
  var decrementNum;
  for (var i = 0; i < num; num--) {
  decrementNum = num--;
  }
  currentSum = num + decrementNum;
  return currentSum;
}
//console.log(summation(3))
//*******************************************************//

var bus = [[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]];

bus.map((item[i]) => {
  let sum;
  let currentSum;
  sum = item[i][0] - item[i][1];
  currentSum += sum;
  return currentSum;
})
//*********************************************************//
var myFriends = [
  { name: "John", gender: "male" },
  { name: "Kate", gender: "female" },
  { name: "Mike", gender: "male" },
  { name: "Sophie", gender: "female" },
  { name: "Richard", gender: "male" },
  { name: "Keith", gender: "male" }
];

// A simple filter based on gender.
var isMale = function(x){
  return x.gender == "male";
}

myFriends.filter(isMale); // John, Mike, Richard, Keith
//**********************************************8//

let categories = [
  {id: 'animals', 'parent': null},
  {id: 'mammals', 'parent': 'animals'},
  {id: 'cats', 'parent': 'mammals'},
  {id: 'dog', 'parent': 'mammals'},
  {id: 'chihuahua', 'parent': 'dogs'},
  {id: 'labrador', 'parent': 'dogs'},
  {id: 'persian', 'parent': 'cats'},
  {id: 'siamese', 'parent': 'cats'},
]









































