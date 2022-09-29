const images = [
  '0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg',
]
const todayImage = Math.floor(Math.random()*images.length);

const img = document.createElement('img');
img.src = `images/${images[todayImage]}`

document.body.appendChild(img);