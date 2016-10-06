const { getAllCountries } = require('../all');

module.exports = (filterBy) => {
  const countries = getAllCountries();
  if (!filterBy) {
    return countries;
  }

  const filterParam = filterBy.toLowerCase();

  return countries.filter(country => country.name.toLowerCase().includes(filterParam) || country.name.toLowerCase().official.includes(filterParam));
};
