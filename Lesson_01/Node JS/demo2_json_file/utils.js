const jf = require('jsonfile');

const FILE = './persons.json';

const getPersons = () => {
  return jf.readFile(FILE);
};

module.exports = { getPersons };
