const numbersToCheck = [0, -1, 13, 35234, 34541312, 26765, 45344, 2, 544, 323, 634, 43435, 34534];

// long and proper implementation
for (let k = 0 ; k < numbersToCheck.length ; k++) {
	if (numbersToCheck[k] % 2 === 0) {
		console.log(`${numbersToCheck[k]} ; true`);
	} else {
		console.log (`${numbersToCheck[k]} ; false`)
	}
}

// ultra short implementation
numbersToCheck.forEach((num) => console.log(`${num} ${num % 2 === 0 ? "even" : "odd"}`));
