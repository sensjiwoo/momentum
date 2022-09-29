const loginForm = document.getElementById('form');
const loginInput = loginForm.querySelector('input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASS = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(e){
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASS);
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreeting(userName);
}

function paintGreeting(userName){
  greeting.innerText = `안녕하세요, ${userName}님!`; 
  greeting.classList.remove(HIDDEN_CLASS);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintGreeting(savedUserName);
}