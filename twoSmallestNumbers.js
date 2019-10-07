const sumTwoSmallestNumbers = (numbers) => {
  let firstSmallest = 0;
  let secondSmallest = 0;

  if (numbers[0] < numbers[1]) {
    firstSmallest = numbers[0];
    secondSmallest = numbers[1];
  } else {
    firstSmallest = numbers[1];
    secondSmallest = numbers[0];
  }

  for (let i = 0; i < numbers.length; i++) {
    const currentNum = numbers[i];
    const nextNum = numbers[i + 1];
    if (currentNum < firstSmallest) {
      firstSmallest = currentNum;
    }
  }
  for (let i = 0; i <= numbers.length; i++) {
    const currentNum = numbers[i];
    const nextNum = numbers[i + 1];

    if (secondSmallest > currentNum && currentNum > firstSmallest) {
      secondSmallest = currentNum;
    }
  }

  const result = firstSmallest + secondSmallest;

  return result;
};
