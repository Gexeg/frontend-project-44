#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { launchGame, getUserName, getRandomNum } from '../src/index.js';

const operations = [
  {
    sign: '+',
    f: (a, b) => a + b,
  },
  {
    sign: '-',
    f: (a, b) => a - b,
  },
  {
    sign: '/',
    f: (a, b) => a / b,
  },
  {
    sign: '*',
    f: (a, b) => a * b,
  },
];
const getRandomOperation = () => operations[Math.floor(Math.random() * operations.length)];

const askQuestionCalculations = () => {
  const a = getRandomNum();
  const b = getRandomNum();
  const operation = getRandomOperation();

  console.log(`Question: ${a} ${operation.sign} ${b}`);

  const userAnswer = Number(readlineSync.question('Your answer: '));
  const rightAnswer = operation.f(a, b);
  return [userAnswer, rightAnswer];
};

const userName = getUserName();
console.log('What is the result of the expression?');
launchGame(userName, askQuestionCalculations);
