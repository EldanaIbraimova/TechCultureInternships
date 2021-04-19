// task 1
if ("0") {
  alert( 'Привет' );
} // Да потому что "0" непустая строка

// task 2
if (answer == "ECMAScript"){
	alert("Верно!");
}else{
	alert("Не знаете? ECMAScript!");
}

// task 3
if (answer > 0){
	alert(1);
}else if(answer < 0){
	alert(-1);
}else{
	alert(0);
}

// task 4

let result = (a + b < 4) ? "Мало" : "Много";

// task 5

let message = (login == "Сотрудник") ? "Привет" : 
(login == "Директор") ? "Здравствуйте" : 
(login == "") ? "Нет логина" : "";
