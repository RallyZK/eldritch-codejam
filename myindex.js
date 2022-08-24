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


for (let i = 0; i < cards.length; i++) {
  cards[i].onclick = function () {
    card = i;
    console.log(`card: ${card}`);

    if (card === 0) {
      cardText.innerHTML = 'Карта "Azathoth"';
      selectedCard = firstCard;
      cards[0].classList.add('active');
      cards[1].classList.remove('active');
      cards[2].classList.remove('active');
      cards[3].classList.remove('active');
    } else if (card === 1) {
      cardText.innerHTML = 'Карта "Cthulhu"';
      selectedCard = secondCard;
      cards[0].classList.remove('active');
      cards[1].classList.add('active');
      cards[2].classList.remove('active');
      cards[3].classList.remove('active');
    } else if (card === 2) {
      cardText.innerHTML = 'Карта "IogSothoth"';
      selectedCard = thirdCard;
      cards[0].classList.remove('active');
      cards[1].classList.remove('active');
      cards[2].classList.add('active');
      cards[3].classList.remove('active');
    } else if (card === 3) {
      cardText.innerHTML = 'Карта "ShubNiggurath"';
      selectedCard = forthCard;
      cards[0].classList.remove('active');
      cards[1].classList.remove('active');
      cards[2].classList.remove('active');
      cards[3].classList.add('active');
    }
    console.log(`selected card: ${selectedCard}`)
    updateDots()
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
    console.log(`level: ${level}`);

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

blendButton.addEventListener('click', () => {
  if (card === undefined || level === undefined) {
    alert('Выберите карту и уровень сложности')
  } else {
    firstStep.classList.add('hidden');
    secondStep.classList.remove('hidden');
    createCardsArr();
  }
})

let cardsArr = [];
let subArr;
let randomNum;
let rNum;

function createCardsArr() {

  if (level === 0) {
    subArr = [];
    while (subArr.length < selectedCard[0]) {
      randomNum = Math.floor(Math.random() * 17);
      rNum = randomNum;
      if (greenCards[rNum].difficulty === 'easy') {
        if (!cardsArr.flat().includes(greenCards[rNum].id)) {
          subArr.push(greenCards[rNum].id)
        }
      }
    }
    cardsArr.push(subArr)

    subArr = [];
    while (subArr.length < selectedCard[1]) {
      randomNum = Math.floor(Math.random() * 20);
      rNum = randomNum;
      if (brownCards[rNum].difficulty === 'easy') {
        if (!cardsArr.flat().includes(brownCards[rNum].id)) {
          subArr.push(brownCards[rNum].id)
        }
      }
    }
    cardsArr.push(subArr)

    subArr = [];
    while (subArr.length < selectedCard[2]) {
      randomNum = Math.floor(Math.random() * 11);
      rNum = randomNum;
      if (blueCards[rNum].difficulty === 'easy') {
        if (!cardsArr.flat().includes(blueCards[rNum].id)) {
          subArr.push(blueCards[rNum].id)
        }
      }
    }
    cardsArr.push(subArr)

    subArr = [];
    while (subArr.length < selectedCard[3]) {
      randomNum = Math.floor(Math.random() * 17);
      rNum = randomNum;
      if (greenCards[rNum].difficulty === 'easy') {
        if (!cardsArr.flat().includes(greenCards[rNum].id)) {
          subArr.push(greenCards[rNum].id)
        }
      }
    }
    cardsArr.push(subArr)

    subArr = [];
    while (subArr.length < selectedCard[4]) {
      randomNum = Math.floor(Math.random() * 20);
      rNum = randomNum;
      if (brownCards[rNum].difficulty === 'easy') {
        if (!cardsArr.flat().includes(brownCards[rNum].id)) {
          subArr.push(brownCards[rNum].id)
        }
      }
    }
    cardsArr.push(subArr)

    subArr = [];
    while (subArr.length < selectedCard[5]) {
      randomNum = Math.floor(Math.random() * 11);
      rNum = randomNum;
      if (blueCards[rNum].difficulty === 'easy') {
        if (!cardsArr.flat().includes(blueCards[rNum].id)) {
          subArr.push(blueCards[rNum].id)
        }
      }
    }
    cardsArr.push(subArr)

    subArr = [];
    while (subArr.length < selectedCard[6]) {
      randomNum = Math.floor(Math.random() * 17);
      rNum = randomNum;
      if (greenCards[rNum].difficulty === 'easy') {
        if (!cardsArr.flat().includes(greenCards[rNum].id)) {
          subArr.push(greenCards[rNum].id)
        }
      }
    }
    cardsArr.push(subArr)

    subArr = [];
    while (subArr.length < selectedCard[7]) {
      randomNum = Math.floor(Math.random() * 20);
      rNum = randomNum;
      if (brownCards[rNum].difficulty === 'easy') {
        if (!cardsArr.flat().includes(brownCards[rNum].id)) {
          subArr.push(brownCards[rNum].id)
        }
      }
    }
    cardsArr.push(subArr)

    subArr = [];
    while (subArr.length < selectedCard[8]) {
      randomNum = Math.floor(Math.random() * 11);
      rNum = randomNum;
      if (blueCards[rNum].difficulty === 'easy') {
        if (!cardsArr.flat().includes(blueCards[rNum].id)) {
          subArr.push(blueCards[rNum].id)
        }
      }
    }
    cardsArr.push(subArr)
  }

  if (level === 1) {
    subArr = [];
    while (subArr.length < selectedCard[0]) {
      randomNum = Math.floor(Math.random() * 17);
      rNum = randomNum;
      if (greenCards[rNum].difficulty === 'easy' || greenCards[rNum].difficulty === 'normal') {
        if (!cardsArr.flat().includes(greenCards[rNum].id)) {
          subArr.push(greenCards[rNum].id)
        }
      }
    }
    cardsArr.push(subArr)

    subArr = [];
    while (subArr.length < selectedCard[1]) {
      randomNum = Math.floor(Math.random() * 20);
      rNum = randomNum;
      if (brownCards[rNum].difficulty === 'easy' || brownCards[rNum].difficulty === 'normal') {
        if (!cardsArr.flat().includes(brownCards[rNum].id)) {
          subArr.push(brownCards[rNum].id)
        }
      }
    }
    cardsArr.push(subArr)

    subArr = [];
    while (subArr.length < selectedCard[2]) {
      randomNum = Math.floor(Math.random() * 11);
      rNum = randomNum;
      if (blueCards[rNum].difficulty === 'easy' || blueCards[rNum].difficulty === 'normal') {
        if (!cardsArr.flat().includes(blueCards[rNum].id)) {
          subArr.push(blueCards[rNum].id)
        }
      }
    }
    cardsArr.push(subArr)

    subArr = [];
    while (subArr.length < selectedCard[3]) {
      randomNum = Math.floor(Math.random() * 17);
      rNum = randomNum;
      if (greenCards[rNum].difficulty === 'easy' || greenCards[rNum].difficulty === 'normal') {
        if (!cardsArr.flat().includes(greenCards[rNum].id)) {
          subArr.push(greenCards[rNum].id)
        }
      }
    }
    cardsArr.push(subArr)

    subArr = [];
    while (subArr.length < selectedCard[4]) {
      randomNum = Math.floor(Math.random() * 20);
      rNum = randomNum;
      if (brownCards[rNum].difficulty === 'easy' || brownCards[rNum].difficulty === 'normal') {
        if (!cardsArr.flat().includes(brownCards[rNum].id)) {
          subArr.push(brownCards[rNum].id)
        }
      }
    }
    cardsArr.push(subArr)

    subArr = [];
    while (subArr.length < selectedCard[5]) {
      randomNum = Math.floor(Math.random() * 11);
      rNum = randomNum;
      if (blueCards[rNum].difficulty === 'easy' || blueCards[rNum].difficulty === 'normal') {
        if (!cardsArr.flat().includes(blueCards[rNum].id)) {
          subArr.push(blueCards[rNum].id)
        }
      }
    }
    cardsArr.push(subArr)

    subArr = [];
    while (subArr.length < selectedCard[6]) {
      randomNum = Math.floor(Math.random() * 17);
      rNum = randomNum;
      if (greenCards[rNum].difficulty === 'easy' || greenCards[rNum].difficulty === 'normal') {
        if (!cardsArr.flat().includes(greenCards[rNum].id)) {
          subArr.push(greenCards[rNum].id)
        }
      }
    }
    cardsArr.push(subArr)

    subArr = [];
    while (subArr.length < selectedCard[7]) {
      randomNum = Math.floor(Math.random() * 20);
      rNum = randomNum;
      if (brownCards[rNum].difficulty === 'easy' || brownCards[rNum].difficulty === 'normal') {
        if (!cardsArr.flat().includes(brownCards[rNum].id)) {
          subArr.push(brownCards[rNum].id)
        }
      }
    }
    cardsArr.push(subArr)

    subArr = [];
    while (subArr.length < selectedCard[8]) {
      randomNum = Math.floor(Math.random() * 11);
      rNum = randomNum;
      if (blueCards[rNum].difficulty === 'easy' || blueCards[rNum].difficulty === 'normal') {
        if (!cardsArr.flat().includes(blueCards[rNum].id)) {
          subArr.push(blueCards[rNum].id)
        }
      }
    }
    cardsArr.push(subArr)
  }

  if (level === 2) {
    subArr = [];
    while (subArr.length < selectedCard[0]) {
      randomNum = Math.floor(Math.random() * 17);
      rNum = randomNum;
      if (!cardsArr.flat().includes(greenCards[rNum].id)) {
        subArr.push(greenCards[rNum].id)
      }
    }
    cardsArr.push(subArr)

    subArr = [];
    while (subArr.length < selectedCard[1]) {
      randomNum = Math.floor(Math.random() * 20);
      rNum = randomNum;
      if (!cardsArr.flat().includes(brownCards[rNum].id)) {
        subArr.push(brownCards[rNum].id)
      }
    }
    cardsArr.push(subArr)

    subArr = [];
    while (subArr.length < selectedCard[2]) {
      randomNum = Math.floor(Math.random() * 11);
      rNum = randomNum;
      if (!cardsArr.flat().includes(blueCards[rNum].id)) {
        subArr.push(blueCards[rNum].id)
      }
    }
    cardsArr.push(subArr)

    subArr = [];
    while (subArr.length < selectedCard[3]) {
      randomNum = Math.floor(Math.random() * 17);
      rNum = randomNum;
      if (!cardsArr.flat().includes(greenCards[rNum].id)) {
        subArr.push(greenCards[rNum].id)
      }
    }
    cardsArr.push(subArr)

    subArr = [];
    while (subArr.length < selectedCard[4]) {
      randomNum = Math.floor(Math.random() * 20);
      rNum = randomNum;
      if (!cardsArr.flat().includes(brownCards[rNum].id)) {
        subArr.push(brownCards[rNum].id)
      }
    }
    cardsArr.push(subArr)

    subArr = [];
    while (subArr.length < selectedCard[5]) {
      randomNum = Math.floor(Math.random() * 11);
      rNum = randomNum;
      if (!cardsArr.flat().includes(blueCards[rNum].id)) {
        subArr.push(blueCards[rNum].id)
      }
    }
    cardsArr.push(subArr)

    subArr = [];
    while (subArr.length < selectedCard[6]) {
      randomNum = Math.floor(Math.random() * 17);
      rNum = randomNum;
      if (!cardsArr.flat().includes(greenCards[rNum].id)) {
        subArr.push(greenCards[rNum].id)
      }
    }
    cardsArr.push(subArr)

    subArr = [];
    while (subArr.length < selectedCard[7]) {
      randomNum = Math.floor(Math.random() * 20);
      rNum = randomNum;
      if (!cardsArr.flat().includes(brownCards[rNum].id)) {
        subArr.push(brownCards[rNum].id)
      }
    }
    cardsArr.push(subArr)

    subArr = [];
    while (subArr.length < selectedCard[8]) {
      randomNum = Math.floor(Math.random() * 11);
      rNum = randomNum;
      if (!cardsArr.flat().includes(blueCards[rNum].id)) {
        subArr.push(blueCards[rNum].id)
      }
    }
    cardsArr.push(subArr)
  }

  if (level === 3) {
    subArr = [];
    while (subArr.length < selectedCard[0]) {
      randomNum = Math.floor(Math.random() * 17);
      rNum = randomNum;
      if (greenCards[rNum].difficulty !== 'easy') {
        if (!cardsArr.flat().includes(greenCards[rNum].id)) {
          subArr.push(greenCards[rNum].id)
        }
      }
    }
    cardsArr.push(subArr)

    subArr = [];
    while (subArr.length < selectedCard[1]) {
      randomNum = Math.floor(Math.random() * 20);
      rNum = randomNum;
      if (brownCards[rNum].difficulty !== 'easy') {
        if (!cardsArr.flat().includes(brownCards[rNum].id)) {
          subArr.push(brownCards[rNum].id)
        }
      }
    }
    cardsArr.push(subArr)

    subArr = [];
    while (subArr.length < selectedCard[2]) {
      randomNum = Math.floor(Math.random() * 11);
      rNum = randomNum;
      if (blueCards[rNum].difficulty !== 'easy') {
        if (!cardsArr.flat().includes(blueCards[rNum].id)) {
          subArr.push(blueCards[rNum].id)
        }
      }
    }
    cardsArr.push(subArr)

    subArr = [];
    while (subArr.length < selectedCard[3]) {
      randomNum = Math.floor(Math.random() * 17);
      rNum = randomNum;
      if (greenCards[rNum].difficulty !== 'easy') {
        if (!cardsArr.flat().includes(greenCards[rNum].id)) {
          subArr.push(greenCards[rNum].id)
        }
      }
    }
    cardsArr.push(subArr)

    subArr = [];
    while (subArr.length < selectedCard[4]) {
      randomNum = Math.floor(Math.random() * 20);
      rNum = randomNum;
      if (brownCards[rNum].difficulty !== 'easy') {
        if (!cardsArr.flat().includes(brownCards[rNum].id)) {
          subArr.push(brownCards[rNum].id)
        }
      }
    }
    cardsArr.push(subArr)

    subArr = [];
    while (subArr.length < selectedCard[5]) {
      randomNum = Math.floor(Math.random() * 11);
      rNum = randomNum;
      if (blueCards[rNum].difficulty !== 'easy') {
        if (!cardsArr.flat().includes(blueCards[rNum].id)) {
          subArr.push(blueCards[rNum].id)
        }
      }
    }
    cardsArr.push(subArr)

    subArr = [];
    while (subArr.length < selectedCard[6]) {
      randomNum = Math.floor(Math.random() * 17);
      rNum = randomNum;
      if (greenCards[rNum].difficulty !== 'easy') {
        if (!cardsArr.flat().includes(greenCards[rNum].id)) {
          subArr.push(greenCards[rNum].id)
        }
      }
    }
    cardsArr.push(subArr)

    subArr = [];
    while (subArr.length < selectedCard[7]) {
      randomNum = Math.floor(Math.random() * 20);
      rNum = randomNum;
      if (brownCards[rNum].difficulty !== 'easy') {
        if (!cardsArr.flat().includes(brownCards[rNum].id)) {
          subArr.push(brownCards[rNum].id)
        }
      }
    }
    cardsArr.push(subArr)

    subArr = [];
    while (subArr.length < selectedCard[8]) {
      randomNum = Math.floor(Math.random() * 11);
      rNum = randomNum;
      if (blueCards[rNum].difficulty !== 'easy') {
        if (!cardsArr.flat().includes(blueCards[rNum].id)) {
          subArr.push(blueCards[rNum].id)
        }
      }
    }
    cardsArr.push(subArr)
  }


  if (level === 4) {
    subArr = [];
    while (subArr.length < selectedCard[0]) {
      randomNum = Math.floor(Math.random() * 17);
      rNum = randomNum;
      if (greenCards[rNum].difficulty !== 'easy') {
        if (!cardsArr.flat().includes(greenCards[rNum].id)) {
          subArr.push(greenCards[rNum].id)
        }
      }
    }
    cardsArr.push(subArr)

    subArr = [];
    while (subArr.length < selectedCard[1]) {
      randomNum = Math.floor(Math.random() * 20);
      rNum = randomNum;
      if (brownCards[rNum].difficulty !== 'easy') {
        if (!cardsArr.flat().includes(brownCards[rNum].id)) {
          subArr.push(brownCards[rNum].id)
        }
      }
    }
    cardsArr.push(subArr)

    subArr = [];
    while (subArr.length < selectedCard[2]) {
      randomNum = Math.floor(Math.random() * 11);
      rNum = randomNum;
      if (blueCards[rNum].difficulty !== 'easy') {
        if (!cardsArr.flat().includes(blueCards[rNum].id)) {
          subArr.push(blueCards[rNum].id)
        }
      }
    }
    cardsArr.push(subArr)

    subArr = [];
    while (subArr.length < selectedCard[3]) {
      randomNum = Math.floor(Math.random() * 17);
      rNum = randomNum;
      if (greenCards[rNum].difficulty !== 'easy') {
        if (!cardsArr.flat().includes(greenCards[rNum].id)) {
          subArr.push(greenCards[rNum].id)
        }
      }
    }
    cardsArr.push(subArr)

    subArr = [];
    while (subArr.length < selectedCard[4]) {
      randomNum = Math.floor(Math.random() * 20);
      rNum = randomNum;
      if (brownCards[rNum].difficulty !== 'easy') {
        if (!cardsArr.flat().includes(brownCards[rNum].id)) {
          subArr.push(brownCards[rNum].id)
        }
      }
    }
    cardsArr.push(subArr)

    subArr = [];
    while (subArr.length < selectedCard[5]) {
      randomNum = Math.floor(Math.random() * 11);
      rNum = randomNum;
      if (blueCards[rNum].difficulty !== 'easy') {
        if (!cardsArr.flat().includes(blueCards[rNum].id)) {
          subArr.push(blueCards[rNum].id)
        }
      }
    }
    cardsArr.push(subArr)

    subArr = [];
    while (subArr.length < selectedCard[6]) {
      randomNum = Math.floor(Math.random() * 17);
      rNum = randomNum;
      if (greenCards[rNum].difficulty !== 'easy') {
        if (!cardsArr.flat().includes(greenCards[rNum].id)) {
          subArr.push(greenCards[rNum].id)
        }
      }
    }
    cardsArr.push(subArr)

    subArr = [];
    while (subArr.length < selectedCard[7]) {
      randomNum = Math.floor(Math.random() * 20);
      rNum = randomNum;
      if (brownCards[rNum].difficulty !== 'easy') {
        if (!cardsArr.flat().includes(brownCards[rNum].id)) {
          subArr.push(brownCards[rNum].id)
        }
      }
    }
    cardsArr.push(subArr)

    subArr = [];
    while (subArr.length < selectedCard[8]) {
      randomNum = Math.floor(Math.random() * 11);
      rNum = randomNum;
      if (blueCards[rNum].difficulty !== 'easy') {
        if (!cardsArr.flat().includes(blueCards[rNum].id)) {
          subArr.push(blueCards[rNum].id)
        }
      }
    }
    cardsArr.push(subArr)
  }

  console.log(`cardsArr: ${cardsArr}`)
}

let deck = document.querySelector('.deck')
let clickNumber = 0;

function checkDotNumber(el) {
  return el > 0;
}
let dotNumber;

shirt.addEventListener('click', () => {
  // const img = new Image();
  // img.src = `https://raw.githubusercontent.com/RallyZK/eldritch-codejam/gh-pages/assets/MythicCards/${cardsArr.flat()[clickNumber]}.png`;
  // img.onload = () => {
  //   deck.style.backgroundImage = `url('https://raw.githubusercontent.com/RallyZK/eldritch-codejam/gh-pages/assets/MythicCards/${cardsArr.flat()[clickNumber]}.png')`;
  // };
  console.log(`click number: ${clickNumber}, card: ${cardsArr.flat()[clickNumber]}`);

  deck.style.backgroundImage = `url('./assets/MythicCards/allCards/${cardsArr.flat()[clickNumber]}.jpg')`;
  deck.style.backgroundSize = `100% 100%`;  
  dotNumber = selectedCard.findIndex(checkDotNumber);  
  selectedCard[dotNumber] = selectedCard[dotNumber] - 1;
  updateDots();  
  clickNumber = clickNumber + 1;
  
});

backButton.addEventListener('click', () => {
  firstStep.classList.remove('hidden');
  secondStep.classList.add('hidden');
  clickNumber = 0;
  window.location.reload()
})