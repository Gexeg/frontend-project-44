import readlineSync from 'readline-sync';

export const askQuestion = (additionalData) => {
  console.log(`Question: ${additionalData}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

export const getRandomNum = () => (Math.floor(Math.random() * 101) + 1);
const correctAnswersRequired = 3;

export const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const launchGame = (userName, gameQuestion) => {
  let rightAnswersCounter = 0;

  while (rightAnswersCounter < correctAnswersRequired) {
    const [userAnswer, rightAnswer] = gameQuestion();
    const isAnswerRight = rightAnswer === userAnswer;
    if (isAnswerRight) {
      rightAnswersCounter += 1;
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\n Let's try again, ${userName}!`,
      );
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
