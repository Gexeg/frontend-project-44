#!/usr/bin/env node
import { launchGame, getUserName, askQuestion } from '../src/index.js';

const maxStep = 10;
const seqLength = 10;
const stub = '..';

const getStep = () => (Math.floor(Math.random() * maxStep));
const getProgression = () => [...Array(seqLength).keys()].map((i) => i + getStep());

const askQuestionSequence = () => {
  const progression = getProgression();
  const numIndex = (Math.floor(Math.random() * seqLength));

  const rightAnswer = progression[numIndex];
  progression[numIndex] = stub;

  const userAnswer = askQuestion(progression);
  return [userAnswer, rightAnswer];
};

const userName = getUserName();
console.log('What number is missing in the progression?');
launchGame(userName, askQuestionSequence);
