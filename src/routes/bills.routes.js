/* eslint-disable no-unused-vars */
import { checkParamsIsValid, validatedDigitLines } from '../middlewares';
import { findAmount, findBarCode } from '../services';

const billsRoutes = (route) => {
  route.get('/:digitLines', checkParamsIsValid, validatedDigitLines, (req, res) => {
    const { digitLines } = req.params;
    const code = findBarCode(req.type, digitLines);
    const expirationDate = '';
    const value = findAmount(req.type, digitLines);
    res.status(200).json({
      barCode: code,
      expirationDate: '',
      amount: value,
    });
  });
};

export default billsRoutes;
