
const numbersToSort = [0, -1, 13, 35234, 34541312, 26765, 45344, 2, 544, 323, 634, 43435, 34534];

//in ascending order

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

// in descending order

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


// woilààà  
