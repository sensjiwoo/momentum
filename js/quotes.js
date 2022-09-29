const quotes = [
  {
    ko : '기운과 끈기는 모든 것을 이겨낸다.',
    en : 'Energy and persistence conquer all things'
  },
  {
    ko : '태양이 사라졌다고 생각하는 순간, 한 줄기의 빛이 내게 비춰졌다.',
    en : 'Though the sun is gone, I have a light.'
  },
  {
    ko : '나는 사랑으로 내가 이해하는 모든 것들을 이해한다.',
    en : 'Everything that I understand, I understand only because I love.'
  },
  {
    ko : '인생은 밀림 속의 동물원이다.',
    en : 'Life is a zoo in a jungle.'
  },
  {
    ko : '강력한 이유는 강력한 행동을 낳는다.',
    en : 'Strong reasons make strong actions.'
  },
  {
    ko : '기운과 끈기는 모든 것을 이겨낸다.',
    en : 'Energy and persistence conquer all things.'
  },
]

const quoteKo = document.querySelector('.ko');
const quoteEn = document.querySelector('.en');
const todayQuotes = Math.floor(Math.random() * quotes.length);

quoteKo.innerText = quotes[todayQuotes].ko;
quoteEn.innerText = quotes[todayQuotes].en;