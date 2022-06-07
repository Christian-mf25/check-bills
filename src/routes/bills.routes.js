/* eslint-disable no-unused-vars */
import { findAmount, findBarCode, findExpirationDate } from '../services';
import { checkParamsIsValid, validatedDigitLines } from '../middlewares';

const billsRoutes = (route) => {
  route.get('/:digitLines', checkParamsIsValid, validatedDigitLines, (req, res) => {
    const { digitLines } = req.params;
    const { type } = req;
    res.status(200).json({
      barCode: findBarCode(type, digitLines),
      expirationDate: findExpirationDate(type, digitLines),
      amount: findAmount(type, digitLines),
    });
  });
};

export default billsRoutes;
