const logout = document.getElementById('logout');
const form = document.getElementById('login_form');
const loginInput = document.querySelector('#login_form input');
const greetings = document.getElementById('greeting');
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';
const savedUserName = localStorage.getItem(USERNAME_KEY);

function localSave(item, content){
  localStorage.setItem(item, content);
}
function onLogout(){
  greetings.classList.add(HIDDEN_CLASSNAME);
  form.classList.remove(HIDDEN_CLASSNAME);
  localStorage.removeItem(USERNAME_KEY);
  loginInput.value = '';
}
function onGreetings(name){
  greetings.innerText = `안녕하세요 ${name}님`
  greetings.classList.remove(HIDDEN_CLASSNAME);
  form.classList.add(HIDDEN_CLASSNAME);
}
function onLoginSubmit(e){
  e.preventDefault();
  const userName = loginInput.value;
  localSave(USERNAME_KEY,userName);
  onGreetings(userName);
}

if(savedUserName === null){
  form.addEventListener('submit', onLoginSubmit);
} else{
  onGreetings(savedUserName);
}

logout.addEventListener('click', onLogout);