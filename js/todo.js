const todoForm = document.getElementById('todo_form');
const todoInput = todoForm.querySelector('input');
const todoListForm = document.querySelector('.todolist');
const TODO_KEY = 'todolist';
let todoList = [];
let checkList = [];
function deleteTodo(e){
  const li = e.target.parentElement;
  li.remove();
  todoList = todoList.filter(item => item.id !== parseInt(li.id));
  savedTodo(todoList);
}
function savedTodo(todo){
  localStorage.setItem(TODO_KEY,JSON.stringify(todo));
}
function savedChecked(checkList){
  localStorage.setItem('check', JSON.stringify(checkList));
}

function checked(e){
  const span = e.target.nextSibling;
  const li = e.target.closest('li');
  const input = e.target;

  function checkId(item){
    checkList =  checkList.filter(item => item !== li.id);
    savedChecked(checkList);
  }
  
  if(e.target.checked == true){
    span.classList.add('do');
    checkList.push(li.id);
    savedChecked(checkList);
  } else {
    span.classList.remove('do');

    
    checkList.forEach(checkId);
  }
}

function paintChecked(){


}
function paintTodo(addTodo){
  const li = document.createElement('li');
  li.id = addTodo.id;
  const label = document.createElement('label');

  const input = document.createElement('input');

  // input.type = "checkbox";
  // input.addEventListener('click',checked);
  // label.appendChild(input);

  const span = document.createElement('span');
  span.innerText = addTodo.cont;
  label.appendChild(span);
  li.appendChild(label);

  const button = document.createElement('button');
  button.innerText = 'ⅹ';
  li.appendChild(button);
  button.addEventListener('click',deleteTodo);
  todoListForm.appendChild(li);
}


function todoSubmit(e){
  e.preventDefault();

  // todo 생성
  const todoId = Date.now();
  const todoCont = todoInput.value;
  const addTodo = {};

  addTodo.id = todoId;
  addTodo.cont = todoCont;  

  todoList.push(addTodo);
// input 초기화
  todoInput.value = "";
// 로컬에 저장
  savedTodo(todoList);
// 리스트 추가
  paintTodo(addTodo);
}


todoForm.addEventListener('submit', todoSubmit);


const localTodoList = localStorage.getItem(TODO_KEY);

if(localTodoList !== null){
  const localTodoParse = JSON.parse(localTodoList);
  todoList = localTodoParse;
  localTodoParse.forEach(paintTodo);
}

const localChecked = localStorage.getItem('check');

if(localChecked !== null){
  console.log('있따')
  const localCheckedParse = JSON.parse(localChecked);
  checkList = localCheckedParse;
  console.log(checkList);
}