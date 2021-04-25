//task 1
document.body.firstElementChild
document.body.lastElementChild
document.body.lastElementChild.lastElementChild

//task 2
elem.lastChild.nextSibling === null // Да, потому что у последнего элемента не может быть следующего соседа
elem.children[0].previousSibling === null // Нет, потому что здесь первый элемент-узел и у него может быть сосед узел не являющийся элементом при этом если исправить previousSibling на previousElementSibling то ответ будет да, потому что у первого элемента-узла не может быть предыдущего элемента-узла

//task 3
  let table = document.body.firstElementChild;
for(let i = 0; i < 5; i++){
	for(j = 0; j < 5; j++){
		if(i === j){
			table.rows[i].cells[j].style.backgroundColor = 'red';
		}
	}
}