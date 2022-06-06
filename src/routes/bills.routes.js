import { checkParamsIsValid } from '../middlewares';

const billsRoutes = (route) => {
  route.get('/:digitLines', checkParamsIsValid, (_, res) => {
    res.status(200).json({ message: 'digitLines' });
  });
};

export default billsRoutes;
