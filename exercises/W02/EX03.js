const peopleArr = ["alice", "filippo", "tim", "bryony", "andrea", "luciano"];
const agesArr = [28, 30, 33, 33, 40, 0.3];

function recursiveBubbleSort (arr, sortKey, lastpass = true) {
	for (let i = 0; i < arr.length; i++) {
		if (i < arr.length - 1 && arr[i+1][sortKey] > arr[i][sortKey]) {
			lastpass = false;
			let tmpValue = arr[i+1];
			arr[i+1] = arr[i];
			arr[i] = tmpValue;
		}
	}
	if(lastpass) return arr;
	return recursiveBubbleSort(arr, sortKey);
}

const objArr = [
  {
    "name": "alice",
    "age": 28
  },
  {
    "name": "filippo",
    "age": 30
  },
  {
    "name": "tim",
    "age": 33
  },
  {
    "name": "bryony",
    "age": 33
  },
  {
    "name": "andrea",
    "age": 40
  },
  {
    "name": "luciano",
    "age": 0.3
  }
];

console.log(recursiveBubbleSort(objArr, "age"));



// desired output:
/*
[
  { alice: 28 },
  { filippo: 30 },
  { tim: 33 },
  { bryony: 33 },
  { andrea: 40 },
  { luciano: 0.3 }
]
*/