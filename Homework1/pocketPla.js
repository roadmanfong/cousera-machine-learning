import _ from 'lodash';
import {DIM} from './constant';
import {add, mutliplyScalar} from './util';
import computeError from './computeError';

export default function pocketPlaAlgorithm(data, weight) {
  let countUpdateTime = 0;
  const repeatTimes = 2000;
  // let isFirstTimeRun = false;
  for(let i = 0 ; i < repeatTimes ; i++ ){
    const mistakes = computeError(data, weight);
    const randomMistake = mistakes[_.random(mistakes.length-1)];
    const oldErrorCount = mistakes.length;
    // console.log('randomMistake');
    // console.log(randomMistake);
    //
    const delta = mutliplyScalar(randomMistake.x, randomMistake.y)
    const newWeight = add(weight, delta);
    const newErrorCount = computeError(data, newWeight).length;
    if(newErrorCount < oldErrorCount) {
      console.log('newWeight');
      console.log(newWeight);
      console.log(`newError.errorCount ${newErrorCount}, oldErrorCount ${oldErrorCount}`);
      // isFirstTimeRun = false;
      // console.log('update!!!!');
      weight = newWeight;
      countUpdateTime++;
    }
  }

  return {
    weight,
    countUpdateTime
  };
}

