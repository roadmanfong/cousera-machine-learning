import fs from 'fs';
import _ from 'lodash';
import {DIM} from './constant';

import parseData from './parseData';
import plaAlgorithm from './pla';
import pocketPlaAlgorithm from './pocketPla';
import computeError from './computeError';

export function question15() {
  const rawData = fs.readFileSync('data.dat', 'utf-8');
  const data = parseData(rawData);
  let initWeight = [0,0,0,0,0];
  const {
    weight,
    countUpdateTime
  } = plaAlgorithm(data, initWeight);
  console.log('question15===');
  console.log(`weight:${weight}, countUpdateTime:${countUpdateTime}`);
}

export function question16() {
  const repeatTimes = 2000;

  const rawData = fs.readFileSync('data.dat', 'utf-8');
  const data = parseData(rawData);
  let countUpdateTimeList = [];

  for(var i = 0 ; i < repeatTimes ; i++){
    const shuffledData = _.shuffle(data)
    let initWeight = [0,0,0,0,0];
    const {
      weight,
      countUpdateTime
    } = plaAlgorithm(shuffledData, initWeight);
    countUpdateTimeList.push(countUpdateTime);
    //console.log(`weight:${weight}, countUpdateTime:${countUpdateTime}`);
  }
  let sum = _.reduce(countUpdateTimeList, (memo, num) => {
    return memo + num;
  }, 0);
  console.log('question16===');
  console.log(`Average countUpdateTime ${sum/repeatTimes}`)
}

export function question17() {
  const repeatTimes = 2000;
  const eta = 0.5;

  const rawData = fs.readFileSync('data.dat', 'utf-8');
  const data = parseData(rawData);

  let countUpdateTimeList = [];
  for(var i = 0 ; i < repeatTimes ; i++){
    const shuffledData = _.shuffle(data)
    let initWeight = [0,0,0,0,0];
    const {
      weight,
      countUpdateTime
    } = plaAlgorithm(shuffledData, initWeight, eta);
    countUpdateTimeList.push(countUpdateTime);
    //console.log(`weight:${weight}, countUpdateTime:${countUpdateTime}`);
  }
  let sum = _.reduce(countUpdateTimeList, (memo, num) => {
    return memo + num;
  }, 0);
  console.log('question17===');
  console.log(`Average countUpdateTime ${sum/repeatTimes}`)
}

export function question18() {
  const repeatTimes = 2000;

  const rawData = fs.readFileSync('train.dat', 'utf-8');
  const data = parseData(rawData);
  // const shuffledData = _.shuffle(data);

  let initWeight = [0,0,0,0,0];
  const {
    weight,
    countUpdateTime
  } = pocketPlaAlgorithm(data, initWeight);

  console.log('question18===');
  console.log(`countUpdateTime ${countUpdateTime}`);

  const rawTestData = fs.readFileSync('test.dat', 'utf-8');
  const testData = parseData(rawTestData);
  const mistakes = computeError(testData, weight);
  console.log(`error rate: ${mistakes.length/testData.length}`)
}