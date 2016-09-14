const { getAllCountries } = require('../all');

module.exports = (filterBy) => {
  const countries = getAllCountries();
  if (!filterBy) {
    return countries;
  }

  return countries.filter(country => {
    const exactMatch = (country.name.common === filterBy || country.name.official === filterBy);
    const fuzzyMatch = (country.name.common.indexOf(filterBy) > 0 || country.name.official.indexOf(filterBy) > 0);

    return exactMatch || fuzzyMatch;
  });
};
