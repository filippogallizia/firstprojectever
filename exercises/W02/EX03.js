/////////////////
// EXERCISE 03 //
/////////////////

// concepts:
//  - variables, constants, logging, functions, arrays, objects, sorting
// task:
//  - zip both arrays into an object where the people are the keys and the ages are the values
//  the order of the desired output is important for the validity of the exercise.
// hint:
//  - re-use bubblesort algorithm and adapt to sort by age.

const peopleArr = ["alice", "filippo", "tim", "bryony", "andrea", "luciano"];
const agesArr = [28, 30, 33, 33, 40, 0.3];

// desired output:
/*
[
  { andrea: 40 },
  { tim: 33 },
  { bryony: 33 },
  { filippo: 30 },
  { alice: 28 },
  { luciano: 0.3 }
]
*/