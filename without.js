const assertArraysEqual = function(array1, array2){
    for (let i = 0; i < array1.length; i++){
        if (array1[i] !== array2[i]) {
         console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !==  ${expected}`);
        }
      }
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  }

 const without = function(source, itemsToRemove){
      let final = source;
      let result = [];
      for (let i = 0; i < source.length; i++){
          if (! itemsToRemove.includes(source[i])){
            result.push(source[i]);
          }
      }
      return result;
  }

const words = ["hello", "world", "lighthouse"];
console.log(words);
console.log(without(words, ["lighthouse"]));
console.log(words);

const numbers1 = [1, 2, 3] ; // => [2, 3]
console.log(numbers1);
console.log(without([1, 2, 3], [1]));  // => [2, 3]
console.log(numbers1);

