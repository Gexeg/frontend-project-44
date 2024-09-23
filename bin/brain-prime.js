#!/usr/bin/env node
import {
  launchGame, getUserName, getRandomNum, askQuestion,
} from '../src/index.js';

const isPrime = (num) => {
  const sqrtnum = Math.floor(Math.sqrt(num));
  let prime = 'yes';
  for (let i = 2; i < sqrtnum + 1; i += 1) {
    if (num % i === 0) {
      prime = 'no';
      break;
    }
  }
  return prime;
};

const askQuestionPrime = () => {
  const newNumber = getRandomNum();
  const userAnswer = askQuestion(newNumber);
  return [userAnswer, isPrime(newNumber)];
};

const userName = getUserName();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
launchGame(userName, askQuestionPrime);
