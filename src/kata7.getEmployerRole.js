const getEmployerRole = (employeeName, employees) => {
  const foundPerson = employees.find(
    employee => employee.name === employeeName
  );
  return foundPerson.role;
};

module.exports = getEmployerRole;
