const assertEqual = function (actual, expected) {
    if (actual === expected) {
      console.log(`Assertion Passed: ${actual} === ${expected}`);
    } else if (actual !== expected) {
      console.log(` Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  const eqArrays = function (array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
  
  
  const eqObjects = function (object1, object2) {
    const object1Keys = Object.keys(object1)
    const object2Keys = Object.keys(object2)
    console.log(object1Keys);
    if (Object.keys(object1).length !== Object.keys(object2).length) {
      return false;
    }
    for (let values of object1Keys) {
      if (Array.isArray(object1Keys[values]) && Array.isArray(object2Keys[values])) {
        if (!eqArrays(object1Keys, object2Keys)) {
          return false;
        } else {
          if (object1Keys !== object2Keys) {
            return false;
          }
        }
      }
    }
    return true;
  }
  
  
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  console.log(eqObjects(ab, ba));
  
  
 const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
console.log(eqObjects(ab, abc));
    
  
  
  
  
  
  
  
  
  
