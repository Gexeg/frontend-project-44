#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { launchGame, getUserName, getRandomNum } from '../src/index.js';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }

  return getGcd(b, a % b);
};

const askQuestionGcd = () => {
  const a = getRandomNum();
  const b = getRandomNum();
  console.log(`Question: ${a} ${b}`);

  const userAnswer = Number(readlineSync.question('Your answer: '));
  const rightAnswer = getGcd(a, b);
  return [userAnswer, rightAnswer];
};

const userName = getUserName();
console.log('Find the greatest common divisor of given numbers.');
launchGame(userName, askQuestionGcd);
