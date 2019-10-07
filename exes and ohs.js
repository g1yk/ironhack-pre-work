function XO(str) {
  let xCount = 0;
  let oCount = 0;

  for (i = 0; i < str.length; i++) {
    if (str[i] == 'x' || str[i] == 'X') {
      xCount += 1;
    } else if (str[i] == 'o' || str[i] == 'O') {
      oCount += 1;
    }
  }
  if (xCount == oCount) {
    return true;
  }
  return false;
}
