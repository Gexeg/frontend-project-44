#!/usr/bin/env node
import readlineSync from 'readline-sync';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');
const getOppositeAnswer = (answer) => (answer === 'yes' ? 'no' : 'yes');
const getRandomNum = () => (Math.floor(Math.random() * 101) + 1);

const askQuestionIsEven = () => {
  const newNumber = getRandomNum();
  console.log(`Question: ${newNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const isAnswerRigth = userAnswer === isEven(newNumber);
  return [isAnswerRigth, userAnswer];
};

const evenGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let rightAnswersCounter = 0;
  const correctAnswersRequired = 3;

  while (rightAnswersCounter < correctAnswersRequired) {
    const [isAnswerRight, userAnswer] = askQuestionIsEven();
    if (isAnswerRight) {
      rightAnswersCounter += 1;
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${getOppositeAnswer(userAnswer)}'.\n Let's try again, ${userName}!`,
      );
      rightAnswersCounter = 0;
    }
  }
  console.log(`Congratulations, ${userName}`);
};

evenGame();

