// task 1
function camelize(str) {
  return str
    .split('-')
    .map(
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); 
}

// task 2
function filterRange(arr, r, l) {
  return arr.filter(item => (r <= item && item <= l));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert(filtered); 

alert(arr);

// task 3
function filterRangeInPlace(arr, r, l) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    if (val < r || val > l) {
      arr.splice(i, 1);
      i--;
    }
  }

}
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); 
alert( arr ); 

// task 4
let arr = [5, 2, 1, -10, 8];
arr.sort((r, l) => r - l);
alert( arr );

// task 5
function copySorted(arr) {
  return arr.slice().sort();
}
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert(sorted);
alert(arr);

// task 6

function Calculator(){
	this.operations = {
		'-' (l,r) => l - r,
		'+' (l,r) => l + r
	};

	this.calculate = function(str){
		let split = str.split(' '),
		l = +split[0],
		operator = split[1],
		r = +split[2]
		if (!this.operations[op] || isNaN(l) || isNaN(r)){
			return NaN;
		}
		return this.operations[op](l,r);
	}
	this.addOperation = function(name, func){
		this.operations[name] = func;
	};
}

// task 7
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);

alert( names );

// task 8
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(item => ({ fullName: `${item.name} ${item.surname}`,
id: item.id})); 

alert( usersMapped[0].id ) 
alert( usersMapped[0].fullName )

//task 9
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);


alert(arr[0].name); 
alert(arr[1].name); 
alert(arr[2].name); 
function sortByAge() {
	arr.sort((a,b) => a.age > b.age ? 1 : -1);
}

// task 10
let arr = [1, 2, 3];

shuffle(arr);
shuffle(arr);
shuffle(arr);

function shuffle(arr){
	arr.sort(() => Math.random() - 0.5);
}

// task 11
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); 
function getAverageAge(arr){
	arr.reduce((sum, current) => sum + user.age, 0) / users.length();
}

// task 12
function unique(arr) {
  let result = [];
  for (let str of arr){
  	if (!result.includes(str)){
  		result.push(str);
  	}
  }
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); 