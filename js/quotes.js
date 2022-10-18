const quotesEn = document.querySelector('.quotes_en');
const quotesKo = document.querySelector('.quotes_ko');
const quotes = [
  {
    en : 'Energy and persistence conquer all things',
    ko : '기운과 끈기는 모든 것을 이겨낸다.',
  },
  {
    en : 'Though the sun is gone, I have a light.',
    ko : '태양이 사라졌다고 생각하는 순간, 한 줄기의 빛이 내게 비춰졌다.',
  },
  {
    en : 'Everything that I understand, I understand only because I love.',
    ko : '나는 사랑으로 내가 이해하는 모든 것들을 이해한다.',
  },
  {
    en : 'Life is a zoo in a jungle.',
    ko : '인생은 밀림 속의 동물원이다.',
  },
  {
    en : 'Strong reasons make strong actions.',
    ko : '강력한 이유는 강력한 행동을 낳는다.',
  },
  {
    en : 'Energy and persistence conquer all things.',
    ko : '기운과 끈기는 모든 것을 이겨낸다.',
  },
]

const quotesNum = Math.floor(Math.random()* quotes.length);

quotesEn.innerText = `${quotes[quotesNum].en}`;
quotesKo.innerText = `${quotes[quotesNum].ko}`;
