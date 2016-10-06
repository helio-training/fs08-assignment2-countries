const { getAllCountries } = require('../all');

module.exports = (code) => {
  if (!code || code.length !== 3) {
    throw Error();
  }
  
  code = code.toUpperCase();
  return getAllCountries().filter(country => {
    return country.currency.includes(code);
  });
};


