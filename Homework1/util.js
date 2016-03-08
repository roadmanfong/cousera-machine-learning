import {DIM} from './constant';

export function generateRandomVector(){
  var result = [];
  for(let i = 0 ; i < DIM ; i++){
    result.push(Math.random()*2-1);
  }
  return result;
}

export function estimate(weight, x){
  return sign(dot(weight, x));
}

function sign(num) {
  return num > 0 ? 1 : -1;
}

export function add(x, y){
  let result = [];
  for(var i = 0 ; i< DIM; i++){
    result[i] = x[i] + y[i];
  }
  return result;
}

export function dot(vectorA, vectorB) {
  let result = 0;
  for(let i = 0; i < DIM; i++) {
    result += vectorA[i] * vectorB[i]
  }
  return result;
}

export function mutliplyScalar(vector, scalar){
  return vector.map(item => {return scalar * item});
}

export function normalize(input){
  let normSquare = 0;
  for(let i = 0; i < DIM ; i++){
    normSquare += input[i]*input[i];
  }
  for(let i = 0; i < DIM; i++){
    input[i] = input[i]/Math.sqrt(normSquare);
  }
  return input;
}
