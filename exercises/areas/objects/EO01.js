///////////////////
// EXERCISE EO01 //
///////////////////

// concepts:
//  - Object.keys, Array.forEach, typeof, Array.map
// task:
//  - return cleaned objects with key/value pairs where the value is of type specified

function cleanObjects(objs, type) {
  // change code below this line
  let newArray = objs.map(function(e) {
    let newObj = {};
    let objKey = Object.keys(e);
    for(let x of objKey){
      if(typeof(e[x]) === 'number' && type === 'number'){
        newObj[x] = e[x]
      } 
      else if(typeof(e[x]) === 'string' && type === 'string' ){
      newObj[x] = e[x]
      }
    }  
      return newObj
  })
  return newArray
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

//console.log(cleanObjects(testObjs, 'string'));
// output: [ { stringOne: 'String One' }, { stringTwo: 'String Two' } ]



