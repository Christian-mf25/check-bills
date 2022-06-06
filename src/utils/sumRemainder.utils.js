const sumRemainder = (numArray) => {
  const lessThanNine = numArray.map((item) => {
    if (item > 9) {
      return item
        .toString()
        .split('')
        .reduce((acc, num) => Number(acc) + Number(num));
    }
    return item;
  });
  const resultSum = lessThanNine.reduce((acc, item) => acc + item, 0);
  const remainder = resultSum % 10;
  const sub = 10 - remainder;
  return sub;
};

export default sumRemainder;
