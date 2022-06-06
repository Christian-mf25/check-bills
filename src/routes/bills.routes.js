/* eslint-disable no-unused-vars */
import { checkParamsIsValid, validatedDigitLines } from '../middlewares';
import { findAmount } from '../services';

const billsRoutes = (route) => {
  route.get('/:digitLines', checkParamsIsValid, validatedDigitLines, (req, res) => {
    const { digitLines } = req.params;
    const barCode = '';
    const expirationDate = '';
    const value = findAmount(req.type, digitLines);
    res.status(200).json({ amount: value });
  });
};

export default billsRoutes;
