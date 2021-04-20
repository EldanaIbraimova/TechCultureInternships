// task 1
let user = {
  name: "Джон",
  go: function() { alert(this.name) }
}

(user.go)() // Ошибка пропущена ";" на 5 строке

//task 2
let obj, method;

obj = {
  go: function() { alert(this); }
};

obj.go();               // (1) [object Object]

(obj.go)();             // (2) [object Object]

(method = obj.go)();    // (3) undefined здесь сначало работает присвоение а затем вызывается метод поэтому this неопределен 

(obj.go || obj.stop)(); // (4) undefined тоже самое что выше только вместо присвоения сравнение


// task 3
function makeUser() {
  return {
    name: "Джон",
    ref: this
  };
};

let user = makeUser();

alert( user.ref.name ); // Каким будет результат? Результат: Ошибка. makeUser вызвана как функция, а не через "точку". Можно исправить это сделав поле ref методом

// task 4
let calculator = {
	value1,
	value2,
  read(){
  	this.value1 = +prompt('value 1:',0);
  	this.value2 = +prompt('value 2:',0);
  }
  sum(){
  	return this.value1 + this.value2;
  }
  mul(){
  	return this.value1 * this.value2;
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

// task 5
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { 
    alert( this.step );
    return this;
  }
};