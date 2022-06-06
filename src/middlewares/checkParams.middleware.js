const checkParamsIsValid = (req, res, next) => {
  // try {
  const { digitLines } = req.params;

  if (!Number(digitLines)) {
    return res.status(422).json({ message: 'Digit line line must be numbers only' });
  }

  if (digitLines.length !== 48) {
    return res.status(400).json({ message: 'Digit line must contain 48 digits' });
  }

  return next();
  // } catch (error) {
  //   return 'res.status(error)';
  // }
};

export default checkParamsIsValid;
