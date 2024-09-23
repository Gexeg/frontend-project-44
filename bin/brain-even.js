#!/usr/bin/env node
import {
  launchGame, getUserName, getRandomNum, askQuestion,
} from '../src/index.js';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const askQuestionIsEven = () => {
  const newNumber = getRandomNum();
  const userAnswer = askQuestion(newNumber);
  return [userAnswer, isEven(newNumber)];
};

const userName = getUserName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
launchGame(userName, askQuestionIsEven);
