import { MultiplyByTwo, sumRemainder } from '../utils';

const validateBankConsortium = (digits) => {
  const digitsArray = digits.split('');
  // eslint-disable-next-line no-unused-vars
  const digitsSend = {
    digitOne: digitsArray.splice(11, 1),
    digitTwo: digitsArray.splice(22, 1),
    digitThree: digitsArray.splice(33, 1),
    digitFour: digitsArray.splice(44, 1),
  };

  const generalCheckDigitSend = Number(digitsArray.splice(3, 1)[0]);

  const multiplyDigits = MultiplyByTwo(digitsArray);
  const generalCheckDigitVerified = sumRemainder(multiplyDigits);

  if (generalCheckDigitSend !== generalCheckDigitVerified) {
    return false;
  }

  return true;
};

export default validateBankConsortium;
