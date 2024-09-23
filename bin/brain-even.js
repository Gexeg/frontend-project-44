#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { launchGame, getUserName, getRandomNum } from '../src/index.js';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const askQuestionIsEven = () => {
  const newNumber = getRandomNum();
  console.log(`Question: ${newNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return [userAnswer, isEven(newNumber)];
};

const userName = getUserName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
launchGame(userName, askQuestionIsEven);
