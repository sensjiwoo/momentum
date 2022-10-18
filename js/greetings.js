const loginForm = document.querySelector('#login_form')
const loginName = document.querySelector('.name');
const loginBtn = document.querySelector('.login');
const greetings = document.querySelector('#greetings');
const greetingsName = document.querySelector('#greetings span');
const logoutBtn = document.querySelector('.logout_btn');
const USERNAME_KEY = 'username';
const localStorageName = localStorage.getItem(USERNAME_KEY);

// 사용자이름저장
function savedUserName(name){
  localStorage.setItem(USERNAME_KEY,name);
  console.log('로컬스토리지에 저장')
}
// 인사말
function paintGreetings(name){
  greetingsName.innerText = `안녕하세요, ${name}님.`;
  loginForm.classList.add('hidden');
  greetings.classList.remove('hidden');
  logoutBtn.classList.remove('hidden');
}
// 로그인 실행
function onLoginSubmit(e){
  e.preventDefault();
  const userName = loginName.value; // 사용자 이름
  savedUserName(userName);
  paintGreetings(userName);
  loginName.value = '';
}
// 로그아웃
function logout(){
  loginForm.classList.remove('hidden');
  greetings.classList.add('hidden');
  logoutBtn.classList.add('hidden');
  localStorage.removeItem(USERNAME_KEY);
}
logoutBtn.addEventListener('click', logout);

if(localStorageName !== null){
  paintGreetings(localStorageName);
} else{
  loginForm.addEventListener('submit', onLoginSubmit);
}