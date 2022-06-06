const billsRoutes = (route) => {
  route.get('/:scannableLines', (req, res) => {
    const { scannableLines } = req.params;
    console.log(scannableLines);
    res.status(200).json({ message: 'scannableLines' });
  });
};

export default billsRoutes;
