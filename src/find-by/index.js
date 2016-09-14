const _ = require('lodash');
const { getAllCountries } = require('../all');


const REGIONS = _.chain(getAllCountries().map(country => country.region))
                 .uniq()
                 .compact()
                 .value();


console.log(REGIONS);

module.exports = (region) => {

};

module.exports.REGIONS = REGIONS;
