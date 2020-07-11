/////////////////
// EXERCISE 02 //
/////////////////

// concepts:
//  - while loop, variables, constants, arrays, functions, !recursion, for loop, conditional logic
// task:
//  - sort the numbers in the array `numbersToSort` without using any built in language functions
// hint:
//  - look up bubblesort and recursion in javascript, don't cheat, I know most of the implementations

const numbersToSort = [0, -1, 13, 35234, 34541312, 26765, 45344, 2, 544, 323, 634, 43435, 34534];


function bubbleSort (x) {
  let b = x.length
  for (let i=0; i < b; i++){
    for (let j=0; j < b; j++){
      if (x[j] > x[j+1]){
        let temp = x[j];
        x[j] = x[j+1];
        x[j+1] = temp;
      }
    }
  } return (x);

}

console.log (bubbleSort(numbersToSort));

function bubbleSort2 (x) {
  let b = x.length
  for (let i=0; i < b; i++){
    for (let j=0; j < b; j++){
      if (x[j] < x[j+1]){
        let temp = x[j];
        x[j] = x[j+1];
        x[j+1] = temp;
      }
    }
  } return (x);

}

console.log (bubbleSort2(numbersToSort));






// DESIRED OUTPUT

/*
  -1
  0
  2
  13
  323
  544
  634
  26765
  34534
  35234
  43435
  45344
  34541312
*/

// OR

/*
  34541312
  45344
  43435
  35234
  34534
  26765
  634
  544
  323
  13
  2
  0
  -1
*/

// BONUS
//  - if you make the order (ascending, descending) configurable with an environment variable
