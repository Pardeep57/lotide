const assertEqual = function(actual, expected) {

if(actual === expected){

console.log( `Assertion Passed: ${actual} === ${expected}` );
}

else {
console.log(`Assertion failed:${actual} !== ${expected}` );
}

};

const eqArrays = function (arr1, arr2){
 // check the length
    if(arr1.length != arr2.length) {
        return false;
    } 
    else { 
        let result = false;
        
        // comparing each element of array 
        for(let i=0; i<arr1.length; i++) {

            if(arr1[i] != arr2[i]) {
                return false;
            }
            else {
                result = true;
            }

        }
        return result;
        
  }
}



assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) ;// => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) ;// => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
