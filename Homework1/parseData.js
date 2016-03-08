export default function (raw){
  let data = [];
  const lines = raw.split('\n');

  for(let i = 0, length = lines.length; i < length - 1 ; i++){
    let line = lines[i];
    let item = line.split('\t');
    let x = item[0].split(' ').map(parseFloat);
    x.unshift(1.0);
    data.push({x, y: parseInt(item[1])});
  }
  return data;
}