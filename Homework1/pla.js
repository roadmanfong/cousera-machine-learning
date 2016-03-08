import {DIM} from './constant';
import {
  add,
  mutliplyScalar,
  estimate
} from './util';

export default function plaAlgorithm(data, weight, eta = 1) {
  let countUpdateTime = 0;
  for(let i = 0, length = data.length; i < length; i++){
    var x = data[i].x;
    var targetY= data[i].y;
    if( estimate(weight, x) !== targetY){
      countUpdateTime++;
      let delta = mutliplyScalar(x, targetY * eta);
      weight = add(weight, delta)
    }
  }

  return {
    weight,
    countUpdateTime
  };
}

