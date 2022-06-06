/* eslint-disable no-unused-vars */
const findAmount = (type, digits) => {
  const digitsArray = digits.split('');
  let amount;
  if (type === 'bankConsortium') {
    digitsArray.splice(11, 1);
    amount = (Number(digitsArray.splice(4, 11).join('')) / 100).toFixed(2);
  }
  if (type === 'bankNotes') {
    amount = (Number(digitsArray.splice(37).join('')) / 100).toFixed(2);
  }

  return amount;
};

export default findAmount;
