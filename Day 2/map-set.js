// task 1
function unique(arr) {
  return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) );

// task 2
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) );

function aclean(arr){
	let map = new Map();
	for (let word of arr){
		let sorted = word.toLowerCase().split('').sort().join("");
		map.set(sorted, word);
	}

	return Array.from(map.values());
}

// task 3
let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more"); // потому что keys() возвращает не Array а итерируемый объект