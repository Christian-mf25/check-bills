import { checkParamsIsValid, validatedDigitLines } from '../middlewares';

const billsRoutes = (route) => {
  route.get('/:digitLines', checkParamsIsValid, validatedDigitLines, (_, res) => {
    const barCode = '';
    const expirationDate = '';
    const amount = '';
    res.status(200).json({ message: 'digitLines' });
  });
};

export default billsRoutes;
