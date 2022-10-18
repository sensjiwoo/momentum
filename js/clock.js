const todayDate = document.getElementById('date');
const clock = document.getElementById('clock');
const noon = document.getElementById('noon');

const today = new Date();

const year = today.getFullYear();
const month = today.getMonth();
const date = today.getDate();
const dayNum = today.getDay();
const dayName = ['일','월','화','수','목','금','토'];

function ampm(hours){
  if(hours >= 12){
    return 'PM';
  } else{
    return 'AM';
  }
}
function hour(hours){
  if(hours > 12){
    return (hours - 12);
  }
}
function onClock(){
  const time = new Date();

  const hours = time.getHours();
  const minutes = String(time.getMinutes()).padStart(2,'0');
  const seconds = String(time.getSeconds()).padStart(2,'0');
  clock.textContent = `${hour(hours)}:${minutes}`;
  noon.innerText = ampm(hours);
}

todayDate.innerText = `${year}년 ${month}월 ${date}일 ${dayName[dayNum]}요일`;
onClock();
setInterval(onClock, 1000);
