/* eslint-disable no-unused-vars */

import { sumRemainder } from '../utils';
import MultiplyByTwo from '../utils/MultiplyByTwo.utils';

const validateBankNotes = (digits) => {
  const digitsArray = digits.split('');
  const verificationDigitsSend = {
    digitOne: Number(digitsArray.splice(9, 1)[0]),
    digitTwo: Number(digitsArray.splice(19, 1)[0]),
    digitThree: Number(digitsArray.splice(29, 1)[0]),
  };

  const validDigits = MultiplyByTwo(digitsArray);

  const verificationDigits = {
    fieldOne: sumRemainder(validDigits.splice(0, 9)),
    fieldTwo: sumRemainder(validDigits.splice(0, 10)),
    fieldThree: sumRemainder(validDigits.splice(0, 10)),
  };

  const compareFieldOne = verificationDigitsSend.digitOne === verificationDigits.fieldOne;
  const compareFieldTwo = verificationDigitsSend.digitTwo === verificationDigits.fieldTwo;
  const compareFieldThree = verificationDigitsSend.digitThree === verificationDigits.fieldThree;

  if (!compareFieldOne || !compareFieldTwo || !compareFieldThree) {
    return false;
  }
  return true;
};

export default validateBankNotes;
