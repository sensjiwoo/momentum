const todoForm = document.querySelector('#todo_form');
const todoList = document.querySelector('#todo_list');
const todoInput = todoForm.querySelector('input');

let toDos = [];
const TODO_KEY = 'todo';

function deleteToDo(e){
  const li = e.target.parentElement;
  li.remove();
  toDos = toDos.filter( item => item.id !== parseInt(li.id));
  savedToDo();
}

function savedToDo(todo){
  const stringToDo = JSON.stringify(toDos);
  localStorage.setItem(TODO_KEY,stringToDo);
}

function paintToDo(todo){ // 리스트 만들기
  const li = document.createElement('li');
  li.id = todo.id;

  const span = document.createElement('span');
  span.innerText = todo.text;
  li.appendChild(span);

  const btn = document.createElement('button');
  btn.innerText = '💥';
  btn.addEventListener('click',deleteToDo);

  li.appendChild(btn);
  todoList.appendChild(li);
}

function submitToDo(e){ // 할일 제출
  // 기본동작 막기
  e.preventDefault();
  // input 입력내용 저장
  const toDo = todoInput.value;
  const toDoObj = {
    text: toDo,
    id: Date.now(),
  }
  // input 입력 초기화
  todoInput.value = "";
  // 리스트에 추가하기
  toDos.push(toDoObj);
  // 리스트 만들기
  paintToDo(toDoObj);
  // 로컬스토리지 저장하기
  savedToDo();
}

todoForm.addEventListener('submit',submitToDo);

const toDoStorage = localStorage.getItem(TODO_KEY);

if(toDoStorage !== null){
  const parseToDo = JSON.parse(toDoStorage);
  toDos = parseToDo;
  toDos.forEach(paintToDo);
}