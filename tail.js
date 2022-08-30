// FUNCTION IMPLEMENTATION
/*
const assertEqual = function(actual, expected) {

if(actual === expected){

console.log( `Assertion Passed: ${actual} === ${expected}` );
}

else {
console.log(`Assertion failed:${actual} !== ${expected}` );
}

};
*/

function tail(array) {
// let arraytail = array.length-1;
// return array[arraytail] ;
const newArr = [];
  for (let i = 1; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
};
module.exports = tail ;