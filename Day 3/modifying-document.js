
    elem.append(document.createTextNode(text))
    elem.innerHTML = text
    elem.textContent = text
// textContent и createTextNode работают одинаково

// task 2

function clear(elem){
	while(elem.firstChild){
		elem.firstChild.remove();
	}
}

clear(elem);

// task 3
/*
<table id="table">
  aaa
  <tr>
    <td>Тест</td>
  </tr>
</table>

<script>
  alert(table); // таблица, как и должно быть

  table.remove();
  // почему в документе остался текст "ааа"??
  // потому что текст не может находиться внутри table
</script>
*/

// task 4
let ul = document.createElement('ul');
document.body.append(ul);

while(true){
	let data = prompt('What to do?', '');
	if(!data){
		break;
	}
	let li = document.createElement('li');
	li.textContent = data;
	ul.append(li);
}

// task 5
let container = document.getElementById('container');
createTree(container, data); // создаёт дерево в контейнере
function createTree(container, data){
	container.append(createTreeNew(data)); // добавляем в конец контейнера ul которое вернет нам createTreeNew
}

function createTreeNew(data){
	if(!Object.keys(data).length) return; // если у объекта нет ключей (пустой объект) функция тут же вернет undefined и остальной код не выполнится т.е не создастся ul
	let ul = document.createElement('ul'); // создаем ul
	for(let keys in data){  // пробегаемся по ключам объекта
		let li = document.createElement('li'); // создаем li
		li.innerHTML = keys; // даем переменной li значение ключа
		let childUl = createTreeNew(data[keys]);  // создаем детей вызывая рекурсию
		if (childUl){
			li.append(childUl); // если есть дети добавляем
		}

		ul.append(li); // добавляем детей
	}

	return ul; // возвращаем полученный ul
}

// task 4
let lists = document.getElementsByTagName('li');
for(let list of lists){
	let childnum = lists.getElementsByTagName('li').length;
	if(!childnum) continue;
	li.firstChild.data += '[' + childnum + ']';
}

// task 5
function createCalendar(elem, year, month) {
      let mon = month - 1; 
      let d = new Date(year, mon);
      let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';
      for (let i = 0; i < getDay(d); i++) {
        table += '<td></td>';
      }
      while (d.getMonth() == mon) {
        table += '<td>' + d.getDate() + '</td>';

        if (getDay(d) % 7 == 6) { 
          table += '</tr><tr>';
        }

        d.setDate(d.getDate() + 1);
      }
      if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
          table += '<td></td>';
        }
      }
      table += '</tr></table>';
      elem.innerHTML = table;
    }
    function getDay(date) { 
      let day = date.getDay();
      if (day == 0) day = 7; 
      return day - 1;

// task 6
 let timerId;
 function update() {
  let clock = document.getElementById('clock');
  let date = new Date();
  let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
      clock.children[0].innerHTML = hours;

      let minutes = date.getMinutes();
      if (minutes < 10) minutes = '0' + minutes;
      clock.children[1].innerHTML = minutes;

      let seconds = date.getSeconds();
      if (seconds < 10) seconds = '0' + seconds;
      clock.children[2].innerHTML = seconds;
    }

    function clockStart() {
      timerId = setInterval(update, 1000);
      update(); 
    }

    function clockStop() {
      clearInterval(timerId);
    }

    clockStart();

// task 6
let one = document.querySelector("#one");
one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');

//task 7
let sortedRows = Array.from(table.rows)
      .slice(1)
      .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);
    table.tBodies[0].append(...sortedRows);

