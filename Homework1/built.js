"use strict";

import fs from 'fs';
const DIM = 4;

fs.readFile('data.dat', (err, data) => {
  if (err) throw err;
  console.log(parseData(data));
});

function parseData(raw) {
  "use strict";

  let data = [];
  const lines = raw.split('\n');
  for (let i = 0, length = lines.length; i < length; i++) {
    let line = lines[i].split(' ');
    for (var j = 0; j < DIM; j++) {
      data[i].x = [];
      data[i].x.push(line[j]);
      data[i].y = line[DIM];
    }
  }
  return data;
}

let w = [0, 0, 0, 0];

function compute(input) {
  "use strict";

  let result = 0;
  for (let i = 0; i < DIM; i++) {
    result += w[i] * input[i];
  }
  return result > 0 ? 1 : -1;
}

function normalize(input) {
  "use strict";

  let result = 0;
  for (let i = 0; i < DIM; i++) {
    result += input[i] * input[i];
  }
  let norm = result;
  for (let i = 0; i < DIM; i++) {
    input[i] = input[i] / norm;
  }
  return input;
}

for (let i = 0; i < data.length; i++) {
  if (compute(data[i].x) !== data[i].y) {
    w += data[i].x;
    w = normalize(input);
  }
}
console.log('weight');
console.log(w);
