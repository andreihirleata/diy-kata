const numberToReversedDigits = number => {
  return number
    .toString()
    .split("")
    .reverse()
    .map(Number);
};

module.exports = numberToReversedDigits;
