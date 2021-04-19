// task 1
let i = 3;

while (i) {
  alert( i-- );
} // 1 

let j = 0;
while (++j < 5) alert( j ); // 1 - 4

let k = 0;
while (k++ < 5) alert( k ); // 1 - 5

for (let c = 0; c < 5; ++c) alert( c ); // 0 - 4

for (let d = 0; d < 5; d++) alert( d ); // 0 - 4

for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
}

let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}

let num;

do {
  num = prompt("Введите число, большее 100?", 0);
} while (num <= 100 && num);

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }

  alert( i ); 
}