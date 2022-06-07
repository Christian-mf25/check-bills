/* eslint-disable eqeqeq */
const billsType = (digits) => {
  const bankConsortium = {
    productIdentification: 8,
    segmentIdentification: [1, 2, 3, 4, 5, 6, 7, 9],
    effectiveValueIdentifier: [6, 7, 8, 9],
  };

  const productDigits = digits[0] == bankConsortium.productIdentification;

  const segmentDigits = bankConsortium.segmentIdentification.includes(Number(digits[1]));
  const effectiveValueDigits = bankConsortium.effectiveValueIdentifier.includes(Number(digits[2]));

  if (productDigits && segmentDigits && effectiveValueDigits) {
    return 'bankConsortium';
  }

  return 'bankNotes';
};

export default billsType;
