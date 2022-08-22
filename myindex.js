const firstStep = document.querySelector('.first-step');
const secondStep = document.querySelector('.second-step');

const cards = document.querySelectorAll('.card')
    // azathoth = document.querySelector('.azathoth'),
    // cthulhu = document.querySelector('.cthulhu'),
    // iogSothoth = document.querySelector('.iogSothoth'),
    // shubNiggurath = document.querySelector('.shubNiggurath');

const levels = document.querySelectorAll('.level-button')
    // veryLowLevel = document.querySelectorAll('.level-button')[0],
    // lowLevel = document.querySelectorAll('.level-button')[1],
    // middleLevel = document.querySelectorAll('.level-button')[2],
    // hightLevel = document.querySelectorAll('.level-button')[3],
    // veryHightLevel = document.querySelectorAll('.level-button')[4];

const blendButton = document.querySelector('.blend-button');
const backButton = document.querySelector('.back-button');

let card = 0,
level = 0;

for (let i = 0; i < cards.length; i++) {
    cards[i].onclick = function () {
      card = i;
      console.log(`card: ${level}`);     
    }
  }

  for (let i = 0; i < levels.length; i++) {
    levels[i].onclick = function () {
        level = i;
        console.log(`level: ${level}`);   
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
