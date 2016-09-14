const all = require('./all');
const filter = require('./filter');
const get = require('./get');
const touches = require('./touches');
const findByRegion = require('./find-by');

module.exports = {
  all,
  filter,
  get,
  touches,
  findByRegion,

  REGIONS: findByRegion.REGIONS,

//filter,
//get,
// etc

};
