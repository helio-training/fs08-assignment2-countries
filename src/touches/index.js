const get = require('../get');

module.exports = (code) => {

  const country = get(code);
  return country.borders.map(border => {
    const country =  get(border);
    console.log(country);
    return country;
  });

};
