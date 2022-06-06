import { ErrorHandler } from '../services';

const checkParamsIsValid = (req, res, next) => {
  try {
    const { digitLines } = req.params;

    if (!Number(digitLines)) {
      throw new ErrorHandler(422, 'Digit line should be numbers only, no spaces or hyphens');
    }

    if (digitLines.length !== 48 && digitLines.length !== 47) {
      throw new ErrorHandler(400, 'Digit line must contain 48 or 47 digits');
    }

    return next();
  } catch (error) {
    return res.status(error.statusCode).json({ error: error.message });
  }
};

export default checkParamsIsValid;
