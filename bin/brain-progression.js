#!/usr/bin/env node
import {
  launchGame, getUserName, askQuestion, getRandomNum,
} from '../src/index.js';

const maxStep = 10;
const seqLength = 10;
const stub = '..';

const getStep = () => (Math.floor(Math.random() * maxStep));
const getProgression = () => {
  const step = getStep();
  const seq = [getRandomNum()];
  for (let i = 0; i < seqLength; i += 1) {
    seq.push(seq[i] + step);
  }
  return seq;
};

const askQuestionSequence = () => {
  const progression = getProgression();
  const numIndex = (Math.floor(Math.random() * seqLength + 1));

  const rightAnswer = progression[numIndex];
  progression[numIndex] = stub;

  const userAnswer = Number(askQuestion(progression));
  return [userAnswer, rightAnswer];
};

const userName = getUserName();
console.log('What number is missing in the progression?');
launchGame(userName, askQuestionSequence);
