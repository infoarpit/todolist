//selectors
const todoInput= document.querySelector('.todoinput');
const todoButton= document.querySelector('.todobutton');
const todoList= document.querySelector('.todolist');


//event listener
todoButton.addEventListener('click',addTodo)
todoList.addEventListener('click',deleteCheck)
todoList.addEventListener('click',linecheck)

//functions
function addTodo(event){
	//prevent form from submitting
	event.preventDefault();
	//todo div
	const tododiv=document.createElement('div');
	tododiv.classList.add('todo');
	//create li
	const newtodo=document.createElement('li');
	newtodo.textContent=todoInput.value;
	newtodo.classList.add('todoitem');
	tododiv.appendChild(newtodo);
	//completed or checked
	const completedbutton=document.createElement('button');
	completedbutton.innerHTML='<i class="fas fa-check"></i>';
	completedbutton.classList.add('completebtn');
	tododiv.appendChild(completedbutton);
		//trash
	const trashbutton=document.createElement('button');
	trashbutton.innerHTML='<i class="fas fa-trash"></i>';
	trashbutton.classList.add('trashbtn');
	tododiv.appendChild(trashbutton);
	//append to list
	todoList.appendChild(tododiv);
	//clear todo input value
	todoInput.value=" ";
}

function deleteCheck(e){
	const item = e.target;

	if(item.classList[0]==="trashbtn"){
		const todo=item.parentElement;
		todo.remove();
	}
}

function linecheck(e){
	const item = e.target;

	if(item.classList[0]==="completebtn"){
		const todo=item.parentElement;
		todo.classList.toggle("completed");
	}
}