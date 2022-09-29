// API CALL -> https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

const myApi = 'd684e9fe7a14a05cbcae537c79560ed0';


function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log('당신의 위치는', lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myApi}&units=metric`
  console.log(url);
  fetch(url).then(response => response.json()).then(data => {
    const city = document.querySelector('#weather span:first-child')
    city.innerText = data.name;
    const weather = document.querySelector('#weather span:last-child')
    weather.innerText = `${data.main.temp.toFixed(1)}˚ / ${data.weather[0].main}`;
  });
}
function onGeoError(){
  elert('위치를 찾을 수 없습니다.');
}
 

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);