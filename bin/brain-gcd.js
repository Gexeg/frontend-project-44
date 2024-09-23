#!/usr/bin/env node
import {
  launchGame, getUserName, getRandomNum, askQuestion,
} from '../src/index.js';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }

  return getGcd(b, a % b);
};

const askQuestionGcd = () => {
  const a = getRandomNum();
  const b = getRandomNum();
  const userAnswer = askQuestion(`${a} ${b}`);
  const rightAnswer = getGcd(a, b);
  return [userAnswer, rightAnswer];
};

const userName = getUserName();
console.log('Find the greatest common divisor of given numbers.');
launchGame(userName, askQuestionGcd);
