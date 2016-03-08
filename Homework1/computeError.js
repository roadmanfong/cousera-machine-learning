import {estimate, add, mutliplyScalar, normalize} from './util';

export default function (data, weight){
  let mistakes = [];
  for(let i = 0, length = data.length ; i < length ; i++){
    let {x, y}= data[i];
    if( estimate(weight, x) !== y){
      mistakes.push({x, y});
    }
  }
  // console.log('errorCount:' + errorCount);
  // console.log('mistakes');
  // console.log(mistakes);
  return mistakes;
}

