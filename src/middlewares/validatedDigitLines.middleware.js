/* eslint-disable no-unused-vars */
import {
  validateBankConsortium,
  validateBankNotes,
  ErrorHandler,
  billsType,
} from '../services';

const validatedDigitLines = (req, res, next) => {
  try {
    const { digitLines } = req.params;
    const type = billsType(digitLines);

    if (type === 'bankNotes') {
      if (!validateBankNotes(digitLines) && !validateBankConsortium(digitLines)) {
        throw new ErrorHandler(400, 'Check digit does not agree with the typewritable line');
      }
    }

    req.type = type;
    return next();
  } catch (error) {
    return res.status(error.statusCode).json({ error: error.message });
  }
};

export default validatedDigitLines;
