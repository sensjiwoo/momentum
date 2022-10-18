const bgImg = ['1.jpg', '2.jpg', '3.jpg'];
const imgNum = Math.floor(Math.random() * bgImg.length);

document.body.style.backgroundImage = `url(./images/${bgImg[imgNum]})`;