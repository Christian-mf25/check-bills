const findBarCode = (type, digits) => {
  const digitsArray = digits.split('');
  if (type === 'bankConsortium') {
    digitsArray.splice(11, 1);
    digitsArray.splice(22, 1);
    digitsArray.splice(33, 1);
    digitsArray.splice(44, 1);
  }

  if (type === 'bankNotes') {
    digitsArray.splice(9, 1);
    digitsArray.splice(19, 1);
    digitsArray.splice(29, 1);
  }
  return digitsArray.join('');
};

export default findBarCode;
