/* eslint-disable no-constant-condition */
/* eslint-disable consistent-return */
const findExpirationDate = (type, digits) => {
  const digitsArray = digits.split('');
  if (type === 'bankConsortium') {
    const dateToRevert = digitsArray.splice(26, 8);
    const year = dateToRevert.splice(0, 4).join('');
    const month = dateToRevert.splice(0, 2).join('');
    const day = dateToRevert.join('');

    const date = `${day}/${month}/${year}`;
    if (!new Date(date)) {
      return date;
    }
  }

  if (type === 'bankNotes') {
    const amountDays = Number(digitsArray.splice(33, 4).join(''));
    const baseDate = new Date('10/07/1997');
    baseDate.setDate(baseDate.getDate() + amountDays);
    return baseDate.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
  }
};

export default findExpirationDate;
