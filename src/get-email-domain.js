const { NotImplementedError } = require('../extensions/index.js');
const {red} = require("sinon");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain( email ) {
  let x = email.slice(email.indexOf('@')+1);

  if (x.indexOf('@') !== -1){
    return x.slice(x.indexOf('@')+1)
  }else return x
}

module.exports = {
  getEmailDomain
};
