const todoForm = document.getElementById('todo_form');
const todoInput = document.querySelector('#todo_form input')
const todoUl = document.getElementById('todo_list');
let TODO_KEY = 'todo-list';
let todoList = [];

function savedTodo(){
  localStorage.setItem(TODO_KEY, JSON.stringify(todoList));
}
function deleteTodo(e){
  const deleteLi = e.target.parentElement;
  deleteLi.remove();

  todoList = todoList.filter((item)=> item.id !== parseInt(deleteLi.id));
  savedTodo(todoList);
}
function paintTodo(todo){
  const li = document.createElement('li');
  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = '✖';
  deleteBtn.addEventListener('click',deleteTodo);
  li.id = todo.id;
  li.innerText = todo.text;
  li.appendChild(deleteBtn);
  todoUl.appendChild(li);
}
function todoSubmit(e){
  e.preventDefault();
  const newTodo = todoInput.value;
  const newList = {
    id : Date.now(),
    text : newTodo,
  }
  todoInput.value = '';
  todoList.push(newList);
  paintTodo(newList);
  savedTodo();
}

todoForm.addEventListener('submit', todoSubmit);

const storageTodoList = localStorage.getItem(TODO_KEY);

if(storageTodoList !== null){
  const parseTodoList = JSON.parse(storageTodoList);
  todoList = parseTodoList;
  todoList.forEach(paintTodo);
} 