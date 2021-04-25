const addCategoryInput = document.querySelector(".addCategory input");
const addCategoryButton = document.querySelector(".addCategory button");
const addTodoInput = document.querySelector(".createTodo input");
//const addTodoSelect = document.querySelector(".createTodo select");
const addTodoButton = document.querySelector(".createTodo button");
const clearAllButton = document.querySelector(".allCategories button");
const counter = {
	all: 0
}

/*addCategoryInput.onkeyup = () => {
	let newCategory = addCategoryInput.value;
}*/

let listOfCategories = new Set();
let numberOfTodo = 0;
addCategoryButton.onclick = () => {
	let addTodoSelect = document.querySelector(".createTodo select");
	let newCategory = addCategoryInput.value;
	let getLocalStorage = localStorage.getItem("New Todo");
	if(getLocalStorage == null){
		listArray = [];
	}else{
		listArray = JSON.parse(getLocalStorage);
	}
	listArray.push(newCategory);
	localStorage.setItem("New Todo", JSON.stringify(listArray));
	//showTasks();
	if(!newCategory) return;
	let oldlength = listOfCategories.size;
	listOfCategories.add(newCategory);
	if(oldlength == listOfCategories.size) return;
	let ol = document.createElement('ul');
	let noTaskDiv = document.createElement('li');
	noTaskDiv.classList.add(`${newCategory}NoTask`);
	noTaskDiv.classList.add('todo');
	noTaskDiv.innerHTML = 'No tasks entered yet'
	ol.prepend(noTaskDiv);
	//alert(newCategory);
	//if(!newCategory) return;
	//let oldlength = listOfCategories.size;
	header = document.createElement('ul');
	header.classList.add(newCategory);
	//ol = document.createElement('ol');
    option = document.createElement('option');
	header.innerHTML = newCategory;
	option.innerHTML = newCategory;
	counter[newCategory] = 0;
	//listOfCategories.add(newCategory);
	let div = document.createElement('div');
	div.classList.add(`${newCategory}Counter`);
	div.classList.add('counters');
	div.innerHTML = counter[newCategory];
	if(oldlength != listOfCategories.size){
		categories = document.querySelector('.categories');
	categories.prepend(header);
	header.append(div);
	addTodoSelect.prepend(option);
	}
	let newol = document.querySelector(`.${newCategory}`);
	newol.classList.add('cat');
	newol.append(ol);
	ol.classList.add('ollist');
	/*let noTaskDiv = document.createElement('div');
	noTaskDiv.classList.add(`${newCategory}NoTask`);
	noTaskDiv.innerHTML = 'No tasks entered yet'
	ol.prepend(noTaskDiv);*/
}

addTodoButton.onclick = () => {
let addTodoSelect = document.querySelector(".createTodo select");
//if(addTodoSelect.firstElemChild == null) return;
//alert(addTodoSelect.firstElementChild);
let newTodo = addTodoInput.value;
if(!newTodo) return;
li = document.createElement('li');
button = document.createElement('button');
button.innerHTML = '...';
button.classList.add('active');
button.classList.add('menu');
li.classList.add('todo');
//button.classList.add(`${newTodo}Task`);
li.innerHTML = newTodo;
//alert(document.querySelector(`.${addTodoSelect.value} ul`));
let todoOnCategory = document.querySelector(`.${addTodoSelect.value} ul`);
//todoOnCategory.prepend(li);
if(counter[addTodoSelect.value] == 0){
	let noTaskDiv = document.querySelector(`.${addTodoSelect.value}NoTask`);
	noTaskDiv.innerHTML = newTodo;
	noTaskDiv.append(button);
}else{
	todoOnCategory.prepend(li);
	li.append(button);
}

//li.append(button);
counter[addTodoSelect.value] += 1;
counter.all += 1;
button.setAttribute('id',`button${counter.all}`);
let buttonID = `button${counter.all}`;
button.setAttribute('onclick','menuButton(this.id)')
let allCategories = document.querySelector('.allCategories label');
allCategories.innerHTML = `You have ${counter.all} pending tasks`;
let numTodoOnCategory = document.querySelector(`.${addTodoSelect.value}Counter`);
numTodoOnCategory.innerHTML = `${counter[addTodoSelect.value]}`;


}

function menuButton(buttonID){
	let button = document.getElementById(buttonID);
	if(button.classList.contains('active')){
		let editButton = document.createElement('button');
	let deleteButton = document.createElement('button');
	editButton.setAttribute('id', `${buttonID}Edit`);
	deleteButton.setAttribute('id', `${buttonID}Delete`);
	editButton.setAttribute('onclick', 'editButton(this.id)');
	deleteButton.setAttribute('onclick', 'deleteButton(this.id)');
	editButton.classList.add('edit');
	deleteButton.classList.add('delete');
	editButton.innerHTML = 'Edit';
	deleteButton.innerHTML = 'Delete';
	button.after(deleteButton);
	button.after(editButton);
	button.classList.remove('active');
	}else{
		//let editButton = document.querySelector('.edit');
		//let deleteButton = document.querySelector('.delete');
		let editButton = button.nextSibling;
		let deleteButton = editButton.nextSibling;
		/*while (editButton.nextSibling) {
        editButton.removeChild(editButton.firstChild);
     }
     while(deleteButton.firstChild){
     	deleteButton.removeChild(deleteButton.firstChild);
     }*/
     		while(deleteButton.nextSibling){
     			deleteButton.nextSibling.remove();
     		}
		editButton.remove();
		deleteButton.remove();
		/*alert(editButton);
		alert(deleteButtone);*/
		button.classList.add('active');
	}

}

function editButton(editButtonId){
	let editButtonElem = document.getElementById(editButtonId);
	let menuButton = editButtonElem.previousSibling;
	let deleteButton = editButtonElem.nextSibling;
	if(deleteButton.nextSibling) return;
	let text = menuButton.previousSibling.data; 
	let input = document.createElement('input');
	editButtonElem.style.display = 'none';
	deleteButton.style.display = 'none';
	input.setAttribute('type','text');
	input.setAttribute('value', text);
	deleteButton.after(input);
	let okButton = document.createElement('button');
	okButton.innerHTML = 'Ok';
	okButton.setAttribute('id',`${editButtonId}Ok`);
	okButton.setAttribute('onclick', 'okButton(this.id)');
	let cancelButton = document.createElement('button');
	cancelButton.innerHTML = 'Cancel';
	cancelButton.setAttribute('id', `${editButtonId}Cancel`);
	cancelButton.setAttribute('onclick','cancelButton(this.id)');
	okButton.classList.add('okButton');
	cancelButton.classList.add('cancelButton');
	input.after(cancelButton);
	input.after(okButton);
}

function okButton(okButtonId){
	let okButtonElem = document.getElementById(okButtonId);
	let cancelButton = okButtonElem.nextSibling;
	let input = okButtonElem.previousSibling;
	let editedText = input.value;
	let deleteButton = input.previousSibling;
	let editButton = deleteButton.previousSibling;
	let menuButton = editButton.previousSibling;
	let originalText = menuButton.previousSibling;
	originalText.textContent = editedText;
	cancelButton.remove()
	input.remove();
	okButtonElem.remove();
	editButton.remove();
	deleteButton.remove();
	menuButton.classList.add('active');
}
function deleteButton(deleteButtonId){
	let deleteButtonElem = document.getElementById(deleteButtonId);
	//let okButton = deleteButtonElem.previousSibling;
	//let input = okButton.previousSibling;
	let allCategories = document.querySelector('.allCategories label');
	let editButton = deleteButtonElem.previousSibling;
	let menuButton = editButton.previousSibling;
	let todo = menuButton.previousSibling;
	let div = todo.parentNode;
	let ol = div.parentNode;
	let numcount = ol.previousSibling;
	let divclass = numcount.previousSibling;
	let category = divclass.textContent;
	let numTodoOnCategory = document.querySelector(`.${category}Counter`);
	if(confirm('Are you sure?')){
		deleteButtonElem.remove();
		editButton.remove();
		menuButton.remove();
		todo.remove();
		div.remove();
		counter.all -= 1;
		counter[category] -= 1;
		allCategories.innerHTML = `You have ${counter.all} pending tasks`;
		numTodoOnCategory.innerHTML = `${counter[category]}`;
		if(counter[category] == 0){
			let noTaskDiv = document.createElement('div');
	        noTaskDiv.classList.add(`${category}NoTask`);
	        noTaskDiv.classList.add('todo');
	        noTaskDiv.innerHTML = 'No tasks entered yet'
	        ol.prepend(noTaskDiv);
		}

	}else{
		deleteButtonElem.remove();
		editButton.remove();
		menuButton.classList.add('active');
	}
}

function cancelButton(cancelButtonId){
	let cancelButtonElem = document.getElementById(cancelButtonId);
	let okButton = cancelButtonElem.previousSibling;
	let input = okButton.previousSibling;
	let deleteButton = input.previousSibling;
	let editButton = deleteButton.previousSibling;
	let menuButton = editButton.previousSibling;
	cancelButtonElem.remove();
	okButton.remove();
	input.remove();
	editButton.remove();
	deleteButton.remove();
	menuButton.classList.add('active');

}

clearAllButton.onclick = () => {
	if(confirm('You trying delete all task. Are you sure?')){
		let categories = document.querySelector('.categories');
	categories.remove();
	for(let key in counter){
		counter[key] = 0;
	}
	let allCategories = document.querySelector('.allCategories label');
	allCategories.innerHTML = `You have ${counter.all} pending tasks`;
	let createTodo = document.querySelector('.createTodo');
	let createCategories = document.createElement('div');
	createCategories.classList.add('categories');
	createTodo.append(createCategories);
	let selected = document.querySelector('.category');
	selected.remove();
	let inputTodo = document.querySelector('.inputTodo');
	let newSelected = document.createElement('select');
	newSelected.classList.add('category');
	inputTodo.after(newSelected);
	listOfCategories.clear();
	}
	
}

/*
function showTasks() {
	let getLocalStorageData = localStorage.getItem("New Todo");
	if(getLocalStorageData == null){
		listArray = [];
	}else{
		listArray = JSON.parse(getLocalStorageData);
	}

}
*/