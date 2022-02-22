/* ==========================================================================
JSON.stringify
========================================================================== */

//deep clone using JSON.parse with JSON.stringify
//but will only work if there are no functions wihin the object
function clone(objectToClone) {
  let clonedObject = JSON.stringify(objectToClone);
  try {
    return JSON.parse(clonedObject);
  }
  catch(e) {
    return false;
  }
}

console.log(clone('a'));
//false (not an object)
console.log(clone('{ "name": "bob" }'));
//{ name: "bob" }

/* ==========================================================================
lodash
========================================================================== */

//shallow clone 
_.clone(arrayWithNestedObjects);

//deep clone
_.cloneDeep(arrayWithNestedObjects);

/* ==========================================================================
slice
========================================================================== */

// shallow copy of an array
// (same as state.slice(0,state.length))
let stateCopy = state.slice();

/* ==========================================================================
Object.assign
========================================================================== */

//shallow copy object(s)
//merge one or more objects into the target one, overriding exiting values if applicable
//returns the target object
//Object.assign(target, ...sources)
var a = { name: 'foo', age: 12 }
var b = Object.assign({}, a);
console.log(a === b);
// false