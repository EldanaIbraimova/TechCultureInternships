// task 1
let some = {

};

function A() { return obj; }
function B() { return obj; }

let a = new A;
let b = new B;

alert( a == b );

// task 2
let calculator = new Calculator();
calculator.read();

function Calculator() {
	this.read = function(){
		this.value1 = +prompt("Value 1:", 0);
		this.value2 = +prompt("Value 2:", 0);
	};
	this.sum = function(){
		this value1 + this value2;
	};
	this.mult = function(){
		this value1 * this value2;
	};
}

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

// task 3
function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt('Сколько нужно добавить?', 0);
  };

}
let accumulator = new Accumulator(1);

accumulator.read(); 
accumulator.read(); 

alert(accumulator.value); 