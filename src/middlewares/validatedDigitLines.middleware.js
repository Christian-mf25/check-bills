/* eslint-disable no-unused-vars */
import { billsType, validateBankNotes, ErrorHandler } from '../services';
import validateBankConsortium from '../services/validateBankConsortium.service';

const validatedDigitLines = (req, res, next) => {
  try {
    const { digitLines } = req.params;
    const type = billsType(digitLines);
    if (type === 'bankNotes') {
      if (!validateBankNotes(digitLines)) {
        throw new ErrorHandler(422, 'Check digit does not agree with the typewritable line');
      }
    }
    if (type === 'bankConsortium') {
      if (!validateBankConsortium(digitLines)) {
        throw new ErrorHandler(422, 'Check digit does not agree with the typewritable line');
      }
    }

    req.type = type;
    return next();
  } catch (error) {
    return res.status(error.statusCode).json({ error: error.message });
  }
};

export default validatedDigitLines;
