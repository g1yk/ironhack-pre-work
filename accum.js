const accum = (str) => {
  let result = [];

  for (let i = 0; i<str.length; i++) {
    result.push(iter(str[i], i+1));
    console.log(result)
  }
  return result.join('-');
}


const iter = (str, num) => {
  let letter = str.toUpperCase();

  while (letter.length !== num) {
    letter += str.toLowerCase();
  }
  return letter
}
