const joinNames = namesObj => {
  let nameString;
  const nameArray = namesObj.map(x => x.name);
  if (nameArray.length === 0)
    return "No contained within objects within the array";
  if (nameArray.length === 1) {
    nameString = nameArray.join();
    return `${nameString}`;
  }
  const lastItem = nameArray.pop();
  nameString = nameArray.join(", ");
  return `${nameString} & ${lastItem}`;
};

module.exports = joinNames;
