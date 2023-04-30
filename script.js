'use strict';

const msg = document.querySelector('.message');
const score = document.querySelector('.score');
const number = document.querySelector('.number');
const guess = document.querySelector('.guess');
const check = document.querySelector('.check');
const again = document.querySelector('.again');

let random_num = Math.trunc(Math.random() * 20) + 1;
let guess_num;

const upScore = () => {
  let score_num = Number(score.textContent);
  score_num += 10;
  score.textContent = score_num.toString();
};

const downScore = () => {
  let score_num = Number(score.textContent);
  score_num -= 1;
  score.textContent = score_num.toString();
};

const checkNumber = () => {
  guess_num = Number(guess.value);

  if (guess_num === random_num) {
    msg.textContent = 'Correct Number!';
    number.textContent = random_num.toString();
    upScore();
    document.body.style.backgroundColor = '#60b347';
    check.disabled = true;
  } else if (guess_num > random_num) {
    msg.textContent = 'Too High!';
    downScore();
  } else if (guess_num < random_num) {
    msg.textContent = 'Too Low!';
    downScore();
  }
};

check.addEventListener('click', checkNumber);

again.addEventListener('click', () => {
  random_num = Math.trunc(Math.random() * 20) + 1;
  guess.value = '';
  number.textContent = '?';
  msg.textContent = 'Start guessing...';
  document.body.style.backgroundColor = '#222';
  check.disabled = false;
});
