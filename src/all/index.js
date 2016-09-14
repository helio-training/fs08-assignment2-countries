const countries = require('world-countries');

const getAllCountries = () => countries;

const all = (settings = { loadAll: false, index: 0, pageSize: 15 }) => {
  if (settings.loadAll) return getAllCountries();

  const startingIndex = settings.index * settings.pageSize;
  const endingIndex = startingIndex + settings.pageSize;

  return countries.slice(startingIndex, endingIndex);
};

module.exports = all;

module.exports.getAllCountries = getAllCountries;
