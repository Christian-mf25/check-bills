import { checkParamsIsValid, validatedDigitLines } from '../middlewares';

const billsRoutes = (route) => {
  route.get('/:digitLines', checkParamsIsValid, validatedDigitLines, (_, res) => {
    res.status(200).json({ message: 'digitLines' });
  });
};

export default billsRoutes;
