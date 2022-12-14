const R = require('readline-sync');

const questions = [
  {
    question: 'Which of these brands is Indian? (Toyota, Datsun, Tata): ',
    answer: 'tata',
  },
  {
    question: "What is the name of Elon Musk's car company?: ",
    answer: 'tesla',
  },
  {
    question: "Which manufacturer's car is the Innova?: ",
    answer: 'toyota',
  },
  {
    question: "Which manufacturer's car is the Mustang?: ",
    answer: 'ford',
  },
  {
    question: 'Hyundai and Kia are based out of _______: ',
    answer: 'korea',
  },
];

function welcome() {
  const username = R.question(
    'Welcome to "Do you know your cars?". What shall we call you? '
  );
  console.log(`Welcome again, ${username}. All the best with the quiz!`);
  console.log('-------------------\n\n');
}

function playGame() {
  for (const Q of questions) {
    const answer = R.question(Q.question).toLowerCase();

    if (answer === Q.answer) {
      console.log(`Right answer! Score = ${++score}\n`);
      ++correctAnswers;
    } else console.log(`Wrong answer! Score = ${--score}\n`);
  }
}

function displayScore() {
  console.log(
    `\n\nYou answered ${correctAnswers}/${questions.length} questions correctly.\nFinal score is ${score}`
  );
}

//---------------------
welcome();
playGame();
displayScore();
