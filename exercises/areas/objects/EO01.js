///////////////////
// EXERCISE EO01 //
///////////////////

// concepts:
//  - Object.keys, Array.forEach, typeof, Array.map
// task:
//  - return cleaned objects with key/value pairs where the value is of type specified

function cleanObjects(objs, type) {
  // change code below this line


  // change code above this line
}

const testObjs = [
  {
    arrayOne: [1, 2, 3],
    numberOne: 1,
    numberTwo: 2,
    stringOne: 'String One'
  },
  {
    arrayTwo: [4, 5, 6],
    numberThree: 2,
    numberFour: 3,
    stringTwo: 'String Two'
  }
];


console.log(cleanObjects(testObjs, 'number'));
// output: [ { numberOne: 1, numberTwo: 2 }, { numberThree: 2, numberFour: 3 } ]

console.log(cleanObjects(testObjs, 'string'));
// output: [ { stringOne: 'String One' }, { stringTwo: 'String Two' } ]



