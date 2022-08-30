// FUNCTION IMPLEMENTATION  Method 2
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
  }
};

module.exports = assertEqual;

/*

// FUNCTION IMPLEMENTATION  MMethod 1
const assertEqual = function(actual, expected) {

if(actual === expected){

console.log( `Assertion Passed: ${actual} === ${expected}` );
}

else {
console.log(`Assertion failed:${actual} !== ${expected}` );
}

};


//assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

// console.assert(assertEqual("Lighthouse Labs", "Bootcamp"));
// console.assert(assertEqual(1, 1));

//assertEqual("Bootcamp", "Bootcamp");
//assertEqual(1, 3);

*/
