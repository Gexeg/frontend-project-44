import readlineSync from 'readline-sync';

const correctAnswersRequired = 3;

export const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const launchGame = (userName, askQuestion) => {
  let rightAnswersCounter = 0;

  while (rightAnswersCounter < correctAnswersRequired) {
    const [userAnswer, rightAnswer] = askQuestion();
    const isAnswerRight = rightAnswer === userAnswer;
    if (isAnswerRight) {
      rightAnswersCounter += 1;
      console.log('Correct!');
    } else {
      console.log(rightAnswersCounter);
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\n Let's try again, ${userName}!`,
      );
      rightAnswersCounter = 0;
    }
  }
  console.log(`Congratulations, ${userName}`);
};
