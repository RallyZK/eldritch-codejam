const firstStep = document.querySelector('.first-step');
const secondStep = document.querySelector('.second-step');

const cards = document.querySelectorAll('.card')
const cardText = document.querySelector('.card-text')
    // azathoth = document.querySelector('.azathoth'),
    // cthulhu = document.querySelector('.cthulhu'),
    // iogSothoth = document.querySelector('.iogSothoth'),
    // shubNiggurath = document.querySelector('.shubNiggurath');

const levels = document.querySelectorAll('.level-button')
const levelText = document.querySelector('.level-text')
    // veryLowLevel = document.querySelectorAll('.level-button')[0],
    // lowLevel = document.querySelectorAll('.level-button')[1],
    // middleLevel = document.querySelectorAll('.level-button')[2],
    // hightLevel = document.querySelectorAll('.level-button')[3],
    // veryHightLevel = document.querySelectorAll('.level-button')[4];

const blendButton = document.querySelector('.blend-button');
const backButton = document.querySelector('.back-button');

const green1 = document.querySelector('.green1'),
green2 = document.querySelector('.green2'),
green3 = document.querySelector('.green3'),
brown1 = document.querySelector('.brown1'),
brown2 = document.querySelector('.brown2'),
brown3 = document.querySelector('.brown3'),
blue1 = document.querySelector('.blue1'),
blue2 = document.querySelector('.blue2'),
blue3 = document.querySelector('.blue3');


let card = 0,
level = 0;

for (let i = 0; i < cards.length; i++) {
    cards[i].onclick = function () {
      card = i;
      console.log(`card: ${card}`);    
      
      if (card === 0) {
        cardText.innerHTML = 'Карта "Azathoth"';
        green1.innerHTML = 1
        green2.innerHTML = 2
        green3.innerHTML = 2
        brown1.innerHTML = 2 
        brown2.innerHTML = 3
        brown3.innerHTML = 4
        blue1.innerHTML = 1
        blue2.innerHTML = 1
        blue3.innerHTML = 0 
        cards[0].classList.add('active');
        cards[1].classList.remove('active');
        cards[2].classList.remove('active');
        cards[3].classList.remove('active');
      } else if (card === 1) {
        cardText.innerHTML = 'Карта "Cthulhu"';
        green1.innerHTML = 0
        green2.innerHTML = 1
        green3.innerHTML = 3
        brown1.innerHTML = 2 
        brown2.innerHTML = 3
        brown3.innerHTML = 4
        blue1.innerHTML = 2
        blue2.innerHTML = 0
        blue3.innerHTML = 0
        cards[0].classList.remove('active');
        cards[1].classList.add('active');
        cards[2].classList.remove('active');
        cards[3].classList.remove('active');
      } else if (card === 2) {
        cardText.innerHTML = 'Карта "IogSothoth"';
        green1.innerHTML = 0
        green2.innerHTML = 2
        green3.innerHTML = 3
        brown1.innerHTML = 2 
        brown2.innerHTML = 3
        brown3.innerHTML = 4
        blue1.innerHTML = 1
        blue2.innerHTML = 1
        blue3.innerHTML = 0 
        cards[0].classList.remove('active');
        cards[1].classList.remove('active');
        cards[2].classList.add('active');
        cards[3].classList.remove('active');
      } else if (card === 3) {
        cardText.innerHTML = 'Карта "ShubNiggurath"';
        green1.innerHTML = 1
        green2.innerHTML = 3
        green3.innerHTML = 2
        brown1.innerHTML = 2 
        brown2.innerHTML = 2
        brown3.innerHTML = 4
        blue1.innerHTML = 1
        blue2.innerHTML = 1
        blue3.innerHTML = 0 
        cards[0].classList.remove('active');
        cards[1].classList.remove('active');
        cards[2].classList.remove('active');
        cards[3].classList.add('active');
      }   
    }
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
    firstStep.classList.add('hidden');
    secondStep.classList.remove('hidden');

})

backButton.addEventListener('click', () => {
  firstStep.classList.remove('hidden');
  secondStep.classList.add('hidden');
})
