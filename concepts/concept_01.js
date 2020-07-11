const numbersToSort = [0, -1, 13, 35234, 34541312, 26765, 45344, 2, 544, 323, 634, 43435, 34534];
let val;

val = numbersToSort.sort(function (x,y){
	return x-y;
})

console.log (val);



const person = {
	firstName: 'Steve',
	lastNam: 'Smith',
	age: 30,
	email :'blablabla',
	getbBirthYear: function(){
		return 1989;
	}

}
