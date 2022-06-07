/* eslint-disable arrow-body-style */
const MultiplyByTwo = (digits) => {
  const multiply = digits.map((item, index) => {
    return index % 2 === 0 ? Number(item) * 2 : Number(item);
  });
  return multiply;
};

export default MultiplyByTwo;
