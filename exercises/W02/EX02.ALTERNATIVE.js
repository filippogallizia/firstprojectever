const numbersToSort = [0, -1, 13, 35234, 34541312, 26765, 45344, 2, 544, 323, 634, 43435, 34534];
//const numbersToSort = [0, -1, 13, 35234, 34541312, 26765, 45344, 2, 544, 323, 634, 43435, 34534];

let simpleOperationsCtr = 0;
function bubbleSort (x) {
  let b = x.length
  for (let i=0; i < b; i++){
    for (let j=0; j < b; j++){
      simpleOperationsCtr++;
      if (x[j] < x[j+1]){
        let temp = x[j];
        x[j] = x[j+1];
        x[j+1] = temp;
      }
    }
  } return (x);

}

let complexOperationsCtr = 0;
function recursiveBubbleSort (arr, lastpass = true) {
	for (let i = 0; i < arr.length; i++) {
		complexOperationsCtr++
		if (i < arr.length - 1 && arr[i+1] > arr[i]) {
			lastpass = false;
			let tmpValue = arr[i+1];
			arr[i+1] = arr[i];
			arr[i] = tmpValue;
		}
	}
	if(lastpass) return arr;
	return recursiveBubbleSort(arr);
}


function countDown (num) {
	if (num === 0) return num;
	console.log(num);
	return countDown(num-1);
}

const finalResult = countDown(10);
console.log("final result", finalResult);


function add (a, b) {
	return a + b;
}

console.log(add(1,2));

const loudConsole = {
	log: (msg) => console.log(msg.toUpperCase()),
};
loudConsole.log("hello Filippo\n");

console.log(bubbleSort(numbersToSort), simpleOperationsCtr);
console.log(recursiveBubbleSort(numbersToSort), complexOperationsCtr);


