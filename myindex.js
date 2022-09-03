// Начало кода на 270 стр

const blueCards = [
  {
    id: 'blue1',
    difficulty: 'hard',
    color: 'blue'
  },
  {
    id: 'blue2',
    difficulty: 'hard',
    color: 'blue'
  },
  {
    id: 'blue3',
    difficulty: 'easy',
    color: 'blue'
  },
  {
    id: 'blue4',
    difficulty: 'easy',
    color: 'blue'
  },
  {
    id: 'blue5',
    difficulty: 'easy',
    color: 'blue'
  },
  {
    id: 'blue6',
    difficulty: 'hard',
    color: 'blue'
  },
  {
    id: 'blue7',
    difficulty: 'normal',
    color: 'blue'
  },
  {
    id: 'blue8',
    difficulty: 'hard',
    color: 'blue'
  },
  {
    id: 'blue9',
    difficulty: 'normal',
    color: 'blue'
  },
  {
    id: 'blue10',
    difficulty: 'easy',
    color: 'blue'
  },
  {
    id: 'blue11',
    difficulty: 'normal',
    color: 'blue'
  },
  {
    id: 'blue12',
    difficulty: 'normal',
    color: 'blue'
  },
]

const brownCards = [
  {
    id: 'brown1',
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown2',
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown3',
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown4',
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown5',
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown6',
    difficulty: 'hard',
    color: 'brown'
  },
  {
    id: 'brown7',
    difficulty: 'hard',
    color: 'brown'
  },
  {
    id: 'brown8',
    difficulty: 'hard',
    color: 'brown'
  },
  {
    id: 'brown9',
    difficulty: 'hard',
    color: 'brown'
  },
  {
    id: 'brown10',
    difficulty: 'hard',
    color: 'brown'
  },
  {
    id: 'brown11',
    difficulty: 'easy',
    color: 'brown'
  },
  {
    id: 'brown12',
    difficulty: 'easy',
    color: 'brown'
  },
  {
    id: 'brown13',
    difficulty: 'easy',
    color: 'brown'
  },
  {
    id: 'brown14',
    difficulty: 'easy',
    color: 'brown'
  },
  {
    id: 'brown15',
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown16',
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown17',
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown18',
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown19',
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown20',
    difficulty: 'normal',
    color: 'brown'
  },
  {
    id: 'brown21',
    difficulty: 'easy',
    color: 'brown'
  },
]

const greenCards = [
  {
    id: 'green1',
    difficulty: 'easy',
    color: 'green'
  },
  {
    id: 'green2',
    difficulty: 'hard',
    color: 'green'
  },
  {
    id: 'green3',
    difficulty: 'hard',
    color: 'green'
  },
  {
    id: 'green4',
    difficulty: 'hard',
    color: 'green'
  },
  {
    id: 'green5',
    difficulty: 'hard',
    color: 'green'
  },
  {
    id: 'green6',
    difficulty: 'hard',
    color: 'green'
  },
  {
    id: 'green7',
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green8',
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green9',
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green10',
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green11',
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green12',
    difficulty: 'easy',
    color: 'green'
  },
  {
    id: 'green13',
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green14',
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green15',
    difficulty: 'normal',
    color: 'green'
  },
  {
    id: 'green16',
    difficulty: 'easy',
    color: 'green'
  },
  {
    id: 'green17',
    difficulty: 'easy',
    color: 'green'
  },
  {
    id: 'green18',
    difficulty: 'easy',
    color: 'green'
  },
]

const firstStep = document.querySelector('.first-step');
const secondStep = document.querySelector('.second-step');

const cards = document.querySelectorAll('.card')
const cardText = document.querySelector('.card-text')

const levels = document.querySelectorAll('.level-button')
const levelText = document.querySelector('.level-text')

const blendButton = document.querySelector('.blend-button');
const backButton = document.querySelector('.back-button');

const shirt = document.querySelector('.card-shirt');

const green1 = document.querySelector('.green1'),
  green2 = document.querySelector('.green2'),
  green3 = document.querySelector('.green3'),
  brown1 = document.querySelector('.brown1'),
  brown2 = document.querySelector('.brown2'),
  brown3 = document.querySelector('.brown3'),
  blue1 = document.querySelector('.blue1'),
  blue2 = document.querySelector('.blue2'),
  blue3 = document.querySelector('.blue3');

let card, level;
const firstCard = [1, 2, 1, 2, 3, 1, 2, 4, 0];
const secondCard = [0, 2, 2, 1, 3, 0, 3, 4, 0];
const thirdCard = [0, 2, 1, 2, 3, 1, 3, 4, 0];
const forthCard = [1, 2, 1, 3, 2, 1, 2, 4, 0];
let selectedCard;
let firstStepDots;
let secondStepDots;
let thirdStepDots;

for (let i = 0; i < cards.length; i++) {
  cards[i].onclick = function () {
    card = i;
    if (card === 0) {
      cardText.innerHTML = 'Карта "Azathoth"';
      selectedCard = firstCard;
      firstStepDots = firstCard[0] + firstCard[1] + firstCard[2];
      secondStepDots = firstCard[3] + firstCard[4] + firstCard[5];
      thirdStepDots = firstCard[6] + firstCard[7] + firstCard[8];
      cards[0].classList.add('active');
      cards[1].classList.remove('active');
      cards[2].classList.remove('active');
      cards[3].classList.remove('active');
    } else if (card === 1) {
      cardText.innerHTML = 'Карта "Cthulhu"';
      selectedCard = secondCard;
      firstStepDots = secondCard[0] + secondCard[1] + secondCard[2];
      secondStepDots = secondCard[3] + secondCard[4] + secondCard[5];
      thirdStepDots = secondCard[6] + secondCard[7] + secondCard[8];
      cards[0].classList.remove('active');
      cards[1].classList.add('active');
      cards[2].classList.remove('active');
      cards[3].classList.remove('active');
    } else if (card === 2) {
      cardText.innerHTML = 'Карта "IogSothoth"';
      selectedCard = thirdCard;
      firstStepDots = thirdCard[0] + thirdCard[1] + thirdCard[2];
      secondStepDots = thirdCard[3] + thirdCard[4] + thirdCard[5];
      thirdStepDots = thirdCard[6] + thirdCard[7] + thirdCard[8];
      cards[0].classList.remove('active');
      cards[1].classList.remove('active');
      cards[2].classList.add('active');
      cards[3].classList.remove('active');
    } else if (card === 3) {
      cardText.innerHTML = 'Карта "ShubNiggurath"';
      selectedCard = forthCard;
      firstStepDots = forthCard[0] + forthCard[1] + forthCard[2];
      secondStepDots = forthCard[3] + forthCard[4] + forthCard[5];
      thirdStepDots = forthCard[6] + forthCard[7] + forthCard[8];
      cards[0].classList.remove('active');
      cards[1].classList.remove('active');
      cards[2].classList.remove('active');
      cards[3].classList.add('active');
    }
    updateDots()
    console.log('firstStepDots:', firstStepDots)
    console.log('secondStepDots:', secondStepDots)
    console.log('thirdStepDots :', thirdStepDots)
  }
}

function updateDots() {
  green1.innerHTML = selectedCard[0]
  green2.innerHTML = selectedCard[3]
  green3.innerHTML = selectedCard[6]
  brown1.innerHTML = selectedCard[1]
  brown2.innerHTML = selectedCard[4]
  brown3.innerHTML = selectedCard[7]
  blue1.innerHTML = selectedCard[2]
  blue2.innerHTML = selectedCard[5]
  blue3.innerHTML = selectedCard[8]
}

for (let i = 0; i < levels.length; i++) {
  levels[i].onclick = function () {
    level = i;
    if (level === 0) {
      levelText.innerHTML = 'Уровень сложности "Очень лёгкий"'
      levels[0].classList.add('active');
      levels[1].classList.remove('active');
      levels[2].classList.remove('active');
      levels[3].classList.remove('active');
      levels[4].classList.remove('active');
    } else if (level === 1) {
      levelText.innerHTML = 'Уровень сложности "Лёгкий"'
      levels[0].classList.remove('active');
      levels[1].classList.add('active');
      levels[2].classList.remove('active');
      levels[3].classList.remove('active');
      levels[4].classList.remove('active');
    } else if (level === 2) {
      levelText.innerHTML = 'Уровень сложности "Средний"'
      levels[0].classList.remove('active');
      levels[1].classList.remove('active');
      levels[2].classList.add('active');
      levels[3].classList.remove('active');
      levels[4].classList.remove('active');
    } else if (level === 3) {
      levelText.innerHTML = 'Уровень сложности "Высокий"'
      levels[0].classList.remove('active');
      levels[1].classList.remove('active');
      levels[2].classList.remove('active');
      levels[3].classList.add('active');
      levels[4].classList.remove('active');
    } else if (level === 4) {
      levelText.innerHTML = 'Уровень сложности "Очень высокий"'
      levels[0].classList.remove('active');
      levels[1].classList.remove('active');
      levels[2].classList.remove('active');
      levels[3].classList.remove('active');
      levels[4].classList.add('active');
    }
  }
}

let cardsArr = [],
  objArr = [],
  subArr, subObjArr, randomNum, rNum;

function createCardsArr() {

  if (level === 0) {
    subArr = [];
    subObjArr = [];
    while (subArr.length < selectedCard[0]) {
      randomNum = Math.floor(Math.random() * 17);
      rNum = randomNum;
      if (greenCards[rNum].difficulty === 'easy' && !cardsArr.flat().includes(greenCards[rNum].id) && !subArr.includes(greenCards[rNum].id)) {
        subArr.push(greenCards[rNum].id);
        subObjArr.push(greenCards[rNum])
      }
    }
    cardsArr.push(subArr);
    objArr.push(subObjArr);


    subArr = [];
    subObjArr = [];
    let j = 0;
    while (subArr.length < selectedCard[1]) {
      if (brownCards[j].difficulty === 'easy' && !cardsArr.flat().includes(brownCards[j].id) && !subArr.includes(brownCards[j].id)) {
        subArr.push(brownCards[j].id);
        subObjArr.push(brownCards[j])
      }
      j++
    }
    cardsArr.push(subArr)
    objArr.push(subObjArr);


    subArr = [];
    subObjArr = [];
    while (subArr.length < selectedCard[2]) {
      randomNum = Math.floor(Math.random() * 11);
      rNum = randomNum;
      if (blueCards[rNum].difficulty === 'easy' && !cardsArr.flat().includes(blueCards[rNum].id) && !subArr.includes(blueCards[rNum].id)) {
        subArr.push(blueCards[rNum].id)
        subObjArr.push(blueCards[rNum])
      }
    }
    cardsArr.push(subArr);
    objArr.push(subObjArr);

    subArr = [];
    subObjArr = [];
    while (subArr.length < selectedCard[3]) {
      randomNum = Math.floor(Math.random() * 17);
      rNum = randomNum;
      if (greenCards[rNum].difficulty === 'easy' && !cardsArr.flat().includes(greenCards[rNum].id) && !subArr.includes(greenCards[rNum].id)) {
        subArr.push(greenCards[rNum].id)
        subObjArr.push(greenCards[rNum])
      }
    }
    cardsArr.push(subArr)
    objArr.push(subObjArr);

    subArr = [];
    subObjArr = [];
    j = 0;
    while (subArr.length < selectedCard[4]) {
      if (brownCards[j].difficulty === 'easy' && !cardsArr.flat().includes(brownCards[j].id) && !subArr.includes(brownCards[j].id)) {
        subArr.push(brownCards[j].id)
        subObjArr.push(brownCards[j])
      }
      j++
    }
    cardsArr.push(subArr)
    objArr.push(subObjArr);

    subArr = [];
    subObjArr = [];
    while (subArr.length < selectedCard[5]) {
      randomNum = Math.floor(Math.random() * 11);
      rNum = randomNum;
      if (blueCards[rNum].difficulty === 'easy' && !cardsArr.flat().includes(blueCards[rNum].id) && !subArr.includes(blueCards[rNum].id)) {
        subArr.push(blueCards[rNum].id)
        subObjArr.push(blueCards[rNum])
      }
    }
    cardsArr.push(subArr)
    objArr.push(subObjArr);

    subArr = [];
    subObjArr = [];
    while (subArr.length < selectedCard[6]) {
      randomNum = Math.floor(Math.random() * 17);
      rNum = randomNum;
      if (greenCards[rNum].difficulty === 'easy' && !cardsArr.flat().includes(greenCards[rNum].id) && !subArr.includes(greenCards[rNum].id)) {
        subArr.push(greenCards[rNum].id)
      } else if (greenCards[rNum].difficulty === 'normal' && !cardsArr.flat().includes(greenCards[rNum].id) && !subArr.includes(greenCards[rNum].id)) {
        subArr.push(greenCards[rNum].id)
        subObjArr.push(greenCards[rNum])
      }
    }
    cardsArr.push(subArr);
    objArr.push(subObjArr);

    subArr = [];
    subObjArr = [];
    while (subArr.length < selectedCard[7]) {
      randomNum = Math.floor(Math.random() * 20);
      rNum = randomNum;
      if (brownCards[rNum].difficulty === 'easy' && !cardsArr.flat().includes(brownCards[rNum].id) && !subArr.includes(brownCards[rNum].id)) {
        subArr.push(brownCards[rNum].id)
      } else if (brownCards[rNum].difficulty === 'normal' && !cardsArr.flat().includes(brownCards[rNum].id) && !subArr.includes(brownCards[rNum].id)) {
        subArr.push(brownCards[rNum].id)
        subObjArr.push(brownCards[rNum])
      }
    }
    cardsArr.push(subArr);
    objArr.push(subObjArr);

    subArr = [];
    subObjArr = [];
    while (subArr.length < selectedCard[8]) {
      randomNum = Math.floor(Math.random() * 11);
      rNum = randomNum;
      if (blueCards[rNum].difficulty === 'easy' && !cardsArr.flat().includes(blueCards[rNum].id) && !subArr.includes(blueCards[rNum].id)) {
        subArr.push(blueCards[rNum].id)
        subObjArr.push(blueCards[rNum])
      }
    }
    cardsArr.push(subArr);
    objArr.push(subObjArr);
  }

  if (level === 1) {
    subArr = [];
    subObjArr = [];
    while (subArr.length < selectedCard[0]) {
      randomNum = Math.floor(Math.random() * 17);
      rNum = randomNum;
      if (greenCards[rNum].difficulty === 'easy' || greenCards[rNum].difficulty === 'normal') {
        if (!cardsArr.flat().includes(greenCards[rNum].id && !subArr.includes(greenCards[rNum].id))) {
          subArr.push(greenCards[rNum].id)
          subObjArr.push(greenCards[rNum])
        }
      }
    }
    cardsArr.push(subArr);
    objArr.push(subObjArr);

    subArr = [];
    subObjArr = [];
    while (subArr.length < selectedCard[1]) {
      randomNum = Math.floor(Math.random() * 20);
      rNum = randomNum;
      if (brownCards[rNum].difficulty === 'easy' || brownCards[rNum].difficulty === 'normal') {
        if (!cardsArr.flat().includes(brownCards[rNum].id) && !subArr.includes(brownCards[rNum].id)) {
          subArr.push(brownCards[rNum].id)
          subObjArr.push(brownCards[rNum])
        }
      }
    }
    cardsArr.push(subArr);
    objArr.push(subObjArr);

    subArr = [];
    subObjArr = [];
    while (subArr.length < selectedCard[2]) {
      randomNum = Math.floor(Math.random() * 11);
      rNum = randomNum;
      if (blueCards[rNum].difficulty === 'easy' || blueCards[rNum].difficulty === 'normal') {
        if (!cardsArr.flat().includes(blueCards[rNum].id) && !subArr.includes(blueCards[rNum].id)) {
          subArr.push(blueCards[rNum].id)
          subObjArr.push(blueCards[rNum])
        }
      }
    }
    cardsArr.push(subArr);
    objArr.push(subObjArr);

    subArr = [];
    subObjArr = [];
    while (subArr.length < selectedCard[3]) {
      randomNum = Math.floor(Math.random() * 17);
      rNum = randomNum;
      if (greenCards[rNum].difficulty === 'easy' || greenCards[rNum].difficulty === 'normal') {
        if (!cardsArr.flat().includes(greenCards[rNum].id) && !subArr.includes(greenCards[rNum].id)) {
          subArr.push(greenCards[rNum].id)
          subObjArr.push(greenCards[rNum])
        }
      }
    }
    cardsArr.push(subArr);
    objArr.push(subObjArr);

    subArr = [];
    subObjArr = [];
    while (subArr.length < selectedCard[4]) {
      randomNum = Math.floor(Math.random() * 20);
      rNum = randomNum;
      if (brownCards[rNum].difficulty === 'easy' || brownCards[rNum].difficulty === 'normal') {
        if (!cardsArr.flat().includes(brownCards[rNum].id) && !subArr.includes(brownCards[rNum].id)) {
          subArr.push(brownCards[rNum].id)
          subObjArr.push(brownCards[rNum])
        }
      }
    }
    cardsArr.push(subArr);
    objArr.push(subObjArr);

    subArr = [];
    subObjArr = [];
    while (subArr.length < selectedCard[5]) {
      randomNum = Math.floor(Math.random() * 11);
      rNum = randomNum;
      if (blueCards[rNum].difficulty === 'easy' || blueCards[rNum].difficulty === 'normal') {
        if (!cardsArr.flat().includes(blueCards[rNum].id) && !subArr.includes(blueCards[rNum].id)) {
          subArr.push(blueCards[rNum].id)
          subObjArr.push(blueCards[rNum])
        }
      }
    }
    cardsArr.push(subArr);
    objArr.push(subObjArr);

    subArr = [];
    subObjArr = [];
    while (subArr.length < selectedCard[6]) {
      randomNum = Math.floor(Math.random() * 17);
      rNum = randomNum;
      if (greenCards[rNum].difficulty === 'easy' || greenCards[rNum].difficulty === 'normal') {
        if (!cardsArr.flat().includes(greenCards[rNum].id) && !subArr.includes(greenCards[rNum].id)) {
          subArr.push(greenCards[rNum].id)
          subObjArr.push(greenCards[rNum])
        }
      }
    }
    cardsArr.push(subArr);
    objArr.push(subObjArr);

    subArr = [];
    subObjArr = [];
    while (subArr.length < selectedCard[7]) {
      randomNum = Math.floor(Math.random() * 20);
      rNum = randomNum;
      if (brownCards[rNum].difficulty === 'easy' || brownCards[rNum].difficulty === 'normal') {
        if (!cardsArr.flat().includes(brownCards[rNum].id) && !subArr.includes(brownCards[rNum].id)) {
          subArr.push(brownCards[rNum].id)
          subObjArr.push(brownCards[rNum])
        }
      }
    }
    cardsArr.push(subArr);
    objArr.push(subObjArr);

    subArr = [];
    subObjArr = [];
    while (subArr.length < selectedCard[8]) {
      randomNum = Math.floor(Math.random() * 11);
      rNum = randomNum;
      if (blueCards[rNum].difficulty === 'easy' || blueCards[rNum].difficulty === 'normal') {
        if (!cardsArr.flat().includes(blueCards[rNum].id) && !subArr.includes(blueCards[rNum].id)) {
          subArr.push(blueCards[rNum].id)
          subObjArr.push(blueCards[rNum])
        }
      }
    }
    cardsArr.push(subArr);
    objArr.push(subObjArr);
  }

  if (level === 2) {
    subArr = [];
    subObjArr = [];
    while (subArr.length < selectedCard[0]) {
      randomNum = Math.floor(Math.random() * 17);
      rNum = randomNum;
      if (!cardsArr.flat().includes(greenCards[rNum].id) && !subArr.includes(greenCards[rNum].id)) {
        subArr.push(greenCards[rNum].id)
        subObjArr.push(greenCards[rNum])
      }
    }
    cardsArr.push(subArr);
    objArr.push(subObjArr);

    subArr = [];
    subObjArr = [];
    while (subArr.length < selectedCard[1]) {
      randomNum = Math.floor(Math.random() * 20);
      rNum = randomNum;
      if (!cardsArr.flat().includes(brownCards[rNum].id) && !subArr.includes(brownCards[rNum].id)) {
        subArr.push(brownCards[rNum].id)
        subObjArr.push(brownCards[rNum])
      }
    }
    cardsArr.push(subArr);
    objArr.push(subObjArr);

    subArr = [];
    subObjArr = [];
    while (subArr.length < selectedCard[2]) {
      randomNum = Math.floor(Math.random() * 11);
      rNum = randomNum;
      if (!cardsArr.flat().includes(blueCards[rNum].id) && !subArr.includes(blueCards[rNum].id)) {
        subArr.push(blueCards[rNum].id)
        subObjArr.push(blueCards[rNum])
      }
    }
    cardsArr.push(subArr);
    objArr.push(subObjArr);

    subArr = [];
    subObjArr = [];
    while (subArr.length < selectedCard[3]) {
      randomNum = Math.floor(Math.random() * 17);
      rNum = randomNum;
      if (!cardsArr.flat().includes(greenCards[rNum].id) && !subArr.includes(greenCards[rNum].id)) {
        subArr.push(greenCards[rNum].id)
        subObjArr.push(greenCards[rNum])
      }
    }
    cardsArr.push(subArr);
    objArr.push(subObjArr);

    subArr = [];
    subObjArr = [];
    while (subArr.length < selectedCard[4]) {
      randomNum = Math.floor(Math.random() * 20);
      rNum = randomNum;
      if (!cardsArr.flat().includes(brownCards[rNum].id) && !subArr.includes(brownCards[rNum].id)) {
        subArr.push(brownCards[rNum].id)
        subObjArr.push(brownCards[rNum])
      }
    }
    cardsArr.push(subArr);
    objArr.push(subObjArr);

    subArr = [];
    subObjArr = [];
    while (subArr.length < selectedCard[5]) {
      randomNum = Math.floor(Math.random() * 11);
      rNum = randomNum;
      if (!cardsArr.flat().includes(blueCards[rNum].id) && !subArr.includes(blueCards[rNum].id)) {
        subArr.push(blueCards[rNum].id)
        subObjArr.push(blueCards[rNum])
      }
    }
    cardsArr.push(subArr);
    objArr.push(subObjArr);

    subArr = [];
    subObjArr = [];
    while (subArr.length < selectedCard[6]) {
      randomNum = Math.floor(Math.random() * 17);
      rNum = randomNum;
      if (!cardsArr.flat().includes(greenCards[rNum].id) && !subArr.includes(greenCards[rNum].id)) {
        subArr.push(greenCards[rNum].id)
        subObjArr.push(greenCards[rNum])
      }
    }
    cardsArr.push(subArr);
    objArr.push(subObjArr);

    subArr = [];
    subObjArr = [];
    while (subArr.length < selectedCard[7]) {
      randomNum = Math.floor(Math.random() * 20);
      rNum = randomNum;
      if (!cardsArr.flat().includes(brownCards[rNum].id) && !subArr.includes(brownCards[rNum].id)) {
        subArr.push(brownCards[rNum].id)
        subObjArr.push(brownCards[rNum])
      }
    }
    cardsArr.push(subArr);
    objArr.push(subObjArr);

    subArr = [];
    subObjArr = [];
    while (subArr.length < selectedCard[8]) {
      randomNum = Math.floor(Math.random() * 11);
      rNum = randomNum;
      if (!cardsArr.flat().includes(blueCards[rNum].id) && !subArr.includes(blueCards[rNum].id)) {
        subArr.push(blueCards[rNum].id)
        subObjArr.push(blueCards[rNum])
      }
    }
    cardsArr.push(subArr);
    objArr.push(subObjArr);
  }

  if (level === 3) {
    subArr = [];
    subObjArr = [];
    while (subArr.length < selectedCard[0]) {
      randomNum = Math.floor(Math.random() * 17);
      rNum = randomNum;
      if (greenCards[rNum].difficulty !== 'easy') {
        if (!cardsArr.flat().includes(greenCards[rNum].id) && !subArr.includes(greenCards[rNum].id)) {
          subArr.push(greenCards[rNum].id)
          subObjArr.push(greenCards[rNum])
        }
      }
    }
    cardsArr.push(subArr);
    objArr.push(subObjArr);

    subArr = [];
    subObjArr = [];
    while (subArr.length < selectedCard[1]) {
      randomNum = Math.floor(Math.random() * 20);
      rNum = randomNum;
      if (brownCards[rNum].difficulty !== 'easy') {
        if (!cardsArr.flat().includes(brownCards[rNum].id) && !subArr.includes(brownCards[rNum].id)) {
          subArr.push(brownCards[rNum].id)
          subObjArr.push(brownCards[rNum])
        }
      }
    }
    cardsArr.push(subArr);
    objArr.push(subObjArr);

    subArr = [];
    subObjArr = [];
    while (subArr.length < selectedCard[2]) {
      randomNum = Math.floor(Math.random() * 11);
      rNum = randomNum;
      if (blueCards[rNum].difficulty !== 'easy') {
        if (!cardsArr.flat().includes(blueCards[rNum].id) && !subArr.includes(blueCards[rNum].id)) {
          subArr.push(blueCards[rNum].id)
          subObjArr.push(blueCards[rNum])
        }
      }
    }
    cardsArr.push(subArr);
    objArr.push(subObjArr);

    subArr = [];
    subObjArr = [];
    while (subArr.length < selectedCard[3]) {
      randomNum = Math.floor(Math.random() * 17);
      rNum = randomNum;
      if (greenCards[rNum].difficulty !== 'easy') {
        if (!cardsArr.flat().includes(greenCards[rNum].id) && !subArr.includes(greenCards[rNum].id)) {
          subArr.push(greenCards[rNum].id)
          subObjArr.push(greenCards[rNum])
        }
      }
    }
    cardsArr.push(subArr);
    objArr.push(subObjArr);

    subArr = [];
    subObjArr = [];
    while (subArr.length < selectedCard[4]) {
      randomNum = Math.floor(Math.random() * 20);
      rNum = randomNum;
      if (brownCards[rNum].difficulty !== 'easy') {
        if (!cardsArr.flat().includes(brownCards[rNum].id) && !subArr.includes(brownCards[rNum].id)) {
          subArr.push(brownCards[rNum].id)
          subObjArr.push(brownCards[rNum])
        }
      }
    }
    cardsArr.push(subArr);
    objArr.push(subObjArr);

    subArr = [];
    subObjArr = [];
    while (subArr.length < selectedCard[5]) {
      randomNum = Math.floor(Math.random() * 11);
      rNum = randomNum;
      if (blueCards[rNum].difficulty !== 'easy') {
        if (!cardsArr.flat().includes(blueCards[rNum].id) && !subArr.includes(blueCards[rNum].id)) {
          subArr.push(blueCards[rNum].id)
          subObjArr.push(blueCards[rNum])
        }
      }
    }
    cardsArr.push(subArr);
    objArr.push(subObjArr);

    subArr = [];
    subObjArr = [];
    while (subArr.length < selectedCard[6]) {
      randomNum = Math.floor(Math.random() * 17);
      rNum = randomNum;
      if (greenCards[rNum].difficulty !== 'easy') {
        if (!cardsArr.flat().includes(greenCards[rNum].id) && !subArr.includes(greenCards[rNum].id)) {
          subArr.push(greenCards[rNum].id)
          subObjArr.push(greenCards[rNum])
        }
      }
    }
    cardsArr.push(subArr);
    objArr.push(subObjArr);

    subArr = [];
    subObjArr = [];
    while (subArr.length < selectedCard[7]) {
      randomNum = Math.floor(Math.random() * 20);
      rNum = randomNum;
      if (brownCards[rNum].difficulty !== 'easy') {
        if (!cardsArr.flat().includes(brownCards[rNum].id) && !subArr.includes(brownCards[rNum].id)) {
          subArr.push(brownCards[rNum].id)
          subObjArr.push(brownCards[rNum])
        }
      }
    }
    cardsArr.push(subArr);
    objArr.push(subObjArr);

    subArr = [];
    subObjArr = [];
    while (subArr.length < selectedCard[8]) {
      randomNum = Math.floor(Math.random() * 11);
      rNum = randomNum;
      if (blueCards[rNum].difficulty !== 'easy') {
        if (!cardsArr.flat().includes(blueCards[rNum].id) && !subArr.includes(blueCards[rNum].id)) {
          subArr.push(blueCards[rNum].id)
          subObjArr.push(blueCards[rNum])
        }
      }
    }
    cardsArr.push(subArr);
    objArr.push(subObjArr);
  }

  if (level === 4) {
    subArr = [];
    subObjArr = [];
    while (subArr.length < selectedCard[0]) {
      randomNum = Math.floor(Math.random() * 17);
      rNum = randomNum;
      if (greenCards[rNum].difficulty === 'hard' && !cardsArr.flat().includes(greenCards[rNum].id) && !subArr.includes(greenCards[rNum].id)) {
        subArr.push(greenCards[rNum].id)
        subObjArr.push(greenCards[rNum])
      }
    }
    cardsArr.push(subArr);
    objArr.push(subObjArr);

    subArr = [];
    subObjArr = [];
    let j = 0;
    while (subArr.length < selectedCard[1]) {
      if (brownCards[j].difficulty === 'hard' && !cardsArr.flat().includes(brownCards[j].id) && !subArr.includes(brownCards[j].id)) {
        subArr.push(brownCards[j].id)
        subObjArr.push(brownCards[j])
      }
      j++
    }
    cardsArr.push(subArr);
    objArr.push(subObjArr);

    subArr = [];
    subObjArr = [];
    while (subArr.length < selectedCard[2]) {
      randomNum = Math.floor(Math.random() * 11);
      rNum = randomNum;
      if (blueCards[rNum].difficulty === 'hard' && !cardsArr.flat().includes(blueCards[rNum].id) && !subArr.includes(blueCards[rNum].id)) {
        subArr.push(blueCards[rNum].id)
        subObjArr.push(blueCards[rNum])
      }
    }
    cardsArr.push(subArr);
    objArr.push(subObjArr);

    subArr = [];
    subObjArr = [];
    while (subArr.length < selectedCard[3]) {
      randomNum = Math.floor(Math.random() * 17);
      rNum = randomNum;
      if (greenCards[rNum].difficulty === 'hard' && !cardsArr.flat().includes(greenCards[rNum].id) && !subArr.includes(greenCards[rNum].id)) {
        subArr.push(greenCards[rNum].id)
        subObjArr.push(greenCards[rNum])
      }
    }
    cardsArr.push(subArr);
    objArr.push(subObjArr);

    subArr = [];
    subObjArr = [];
    j = 0;
    while (subArr.length < selectedCard[4]) {
      if (brownCards[j].difficulty === 'hard' && !cardsArr.flat().includes(brownCards[j].id) && !subArr.includes(brownCards[j].id)) {
        subArr.push(brownCards[j].id)
        subObjArr.push(blueCards[j])
      }
      j++
    }
    cardsArr.push(subArr);
    objArr.push(subObjArr);

    subArr = [];
    subObjArr = [];
    while (subArr.length < selectedCard[5]) {
      randomNum = Math.floor(Math.random() * 11);
      rNum = randomNum;
      if (blueCards[rNum].difficulty === 'hard' && !cardsArr.flat().includes(blueCards[rNum].id) && !subArr.includes(blueCards[rNum].id)) {
        subArr.push(blueCards[rNum].id)
        subObjArr.push(blueCards[rNum])
      }
    }
    cardsArr.push(subArr);
    objArr.push(subObjArr);

    subArr = [];
    subObjArr = [];
    while (subArr.length < selectedCard[6]) {
      randomNum = Math.floor(Math.random() * 17);
      rNum = randomNum;
      if (greenCards[rNum].difficulty === 'hard' && !cardsArr.flat().includes(greenCards[rNum].id) && !subArr.includes(greenCards[rNum].id)) {
        subArr.push(greenCards[rNum].id)
        subObjArr.push(greenCards[rNum])
      } else if (greenCards[rNum].difficulty === 'normal' && !cardsArr.flat().includes(greenCards[rNum].id) && !subArr.includes(greenCards[rNum].id)) {
        subArr.push(greenCards[rNum].id)
        subObjArr.push(greenCards[rNum])
      }
    }
    cardsArr.push(subArr);
    objArr.push(subObjArr);

    subArr = [];
    subObjArr = [];
    while (subArr.length < selectedCard[7]) {
      randomNum = Math.floor(Math.random() * 20);
      rNum = randomNum;
      if (brownCards[rNum].difficulty === 'hard' && !cardsArr.flat().includes(brownCards[rNum].id) && !subArr.includes(brownCards[rNum].id)) {
        subArr.push(brownCards[rNum].id)
        subObjArr.push(brownCards[rNum])
      } else if (brownCards[rNum].difficulty === 'normal' && !cardsArr.flat().includes(brownCards[rNum].id) && !subArr.includes(brownCards[rNum].id)) {
        subArr.push(brownCards[rNum].id)
        subObjArr.push(brownCards[rNum])
      }
    }
    cardsArr.push(subArr);
    objArr.push(subObjArr);

    subArr = [];
    subObjArr = [];
    while (subArr.length < selectedCard[8]) {
      randomNum = Math.floor(Math.random() * 11);
      rNum = randomNum;
      if (blueCards[rNum].difficulty === 'hard' && !cardsArr.flat().includes(blueCards[rNum].id) && !subArr.includes(blueCards[rNum].id)) {
        subArr.push(blueCards[rNum].id)
        subObjArr.push(blueCards[rNum])
      }
    }
    cardsArr.push(subArr);
    objArr.push(subObjArr);
  }
}

blendButton.addEventListener('click', () => {
  if (card === undefined || level === undefined) {
    alert('Выберите карту и уровень сложности')
  } else {
    firstStep.classList.add('hidden');
    secondStep.classList.remove('hidden');
    createCardsArr();
    console.log('cardsArr:', cardsArr);
    console.log('objArr:', objArr);
  }
})

let deck = document.querySelector('.deck')
let clickNumber = 1;

function getRandomDot(min, max) {
  let randomNum = Math.floor(min + Math.random() * (max + 1 - min));  
  return randomNum;
}

function changeCard(mincard, maxcard) {
  let randomDot = getRandomDot(mincard, maxcard);
  if (selectedCard[randomDot] !== 0) {
    let dotNumber = randomDot;
    selectedCard[dotNumber] = selectedCard[dotNumber] - 1;
    updateDots();
    shownCard = cardsArr[dotNumber][0]
    deck.style.backgroundImage = `url('./assets/MythicCards/allCards/${shownCard}.jpg')`;
    deck.style.backgroundSize = '100%, 100%';
    cardsArr[dotNumber].shift()
    console.log('dotNumber:', dotNumber)
    console.log('clickNumber:', clickNumber)
  } else {
    changeCard(mincard, maxcard)
  }
}
let shownCard;
shirt.addEventListener('click', () => {
  if (clickNumber <= firstStepDots) {
    changeCard(0, 2)
  } else if (clickNumber > firstStepDots && clickNumber <= (firstStepDots + secondStepDots)) {
    changeCard(3, 5)
  } else if (clickNumber > (firstStepDots + secondStepDots) && clickNumber <= (firstStepDots + secondStepDots + thirdStepDots)) {
    changeCard(6, 8)
  }
  clickNumber = clickNumber + 1;  
})

backButton.addEventListener('click', () => {
  firstStep.classList.remove('hidden');
  secondStep.classList.add('hidden');
  clickNumber = 0;
  window.location.reload();
})