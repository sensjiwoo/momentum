const img = document.querySelector('#bg_img');
const images = [
  'images/bg_1.jpg',
  'images/bg_2.jpg',
  'images/bg_3.jpg',
  'images/bg_4.jpg',
]
const num = Math.floor(Math.random()*images.length);
img.src = images[num];