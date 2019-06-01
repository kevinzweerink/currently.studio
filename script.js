const rotatorValues = [
  '10:04 AM EST',
  '73 degrees fahrenheit',
  'Mostly sunny',
  'Working',
  'Saturday, June 1, 2019'
];

let defaultRotator = 'A design and development studio.';

let count = 0;

const swapRotator = () => {
  if (count % 2 == 0) {
    rotator.innerHTML = defaultRotator
  } else {
    rotator.innerHTML = rotatorValues[Math.floor(Math.random() * rotatorValues.length)]
  }

  count++;
}

const rotator = document.querySelector('.rotator');
const interval = setInterval(swapRotator, 3000);
const intro = document.querySelector('.intro')

const W = window.innerWidth;
const H = window.innerHeight;

const introCards = [
  {
    type: 'image',
    value: 'addy_01.jpg'
  },
  {
    type: 'image',
    value: 'addy_02.jpg'
  },
  {
    type: 'image',
    value: 'ff_01.jpg'
  },
  {
    type: 'image',
    value: 'ff_02.jpg'
  },
  {
    type: 'image',
    value: 'ff_03.jpg'
  },
  {
    type: 'image',
    value: 'iz_04.jpg'
  },
  {
    type: 'image',
    value: 'iz_01.jpg'
  },
  {
    type: 'image',
    value: 'iz_02.jpg'
  },
  {
    type: 'image',
    value: 'iz_03.jpg'
  },
  {
    type: 'image',
    value: 'tc_01.jpg'
  },
  {
    type: 'text',
    value: 'We design and build inventive solutions to tricky problems.'
  },

];

const textCard = text => {
  var c = document.createElement('div');
  c.classList.add('intro-card__text');
  c.classList.add('intro-card')

  var p = document.createElement('p');
  p.innerHTML = text;

  c.appendChild(p);
  return c;
}

const imageCard = image => {
  var c = document.createElement('div');
  c.classList.add('intro-card');
  c.classList.add('intro-card__image');

  var i = document.createElement('img');
  i.src = './assets/' + image;

  c.appendChild(i);
  return c;
}

const placeIntroCards = cards => {
  cards.forEach(card => {
    let c = false;
    let size = H * .6;
    if (card.type === 'text') {
      c = textCard(card.value);
      size = 500;
    }

    if (card.type === 'image') {
      c = imageCard(card.value)
      c.style.zIndex = Math.floor(Math.random() * 200);
    }

    const targetW = (W - size - 100);
    const unit = Math.floor(Math.random() * 5) / 5;

    c.style.width = size + 'px';
    c.style.left = Math.random() * 40 - 20 + 50 + '%';
    c.style.top = Math.random() * 40 - 20 + 50 + '%';

    if (c) {
      intro.appendChild(c);
    }
  })
}

placeIntroCards(introCards);