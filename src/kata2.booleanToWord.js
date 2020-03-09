const booleanToWord = boolean => {
  if (Boolean(boolean) === true) return "Yes";
  return "No";
};

module.exports = booleanToWord;
