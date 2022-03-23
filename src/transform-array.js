const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
  let ar = [];
  arr.forEach(i => ar.push(i))

  // if (!Array.isArray(arr)) {
  //   throw new Error('\'arr\' parameter must be an instance of the Array!')
  // }
     if(ar.includes('--discard-next') && ar.includes('--discard-prev')){
    ar.splice(ar.indexOf('--discard-next')+1, 1);
    ar.splice(ar.indexOf('--discard-next'), 1);
    ar.splice(ar.indexOf('--discard-prev'), 1);

  }else if(ar.includes('--double-next') && ar.includes('--double-prev')){
    ar.splice(ar.indexOf('--double-next'), 0, arr[arr.indexOf('--double-next')+1]);
    ar.splice(ar.indexOf('--double-prev'), 0, arr[arr.indexOf('--double-prev')-1]);
    ar.splice(ar.indexOf('--double-next'), 1);
    ar.splice(ar.indexOf('--double-prev'), 1);

  }else if(ar.includes('--discard-next') && ar.includes('--double-prev')){
    ar.splice(ar.indexOf('--discard-next'),3);

  }else if(ar.includes('--double-next') && ar.includes('--discard-prev')){
    ar.splice(ar.indexOf('--double-next'), 1);
    ar.splice(ar.indexOf('--discard-prev'), 1);

  }else if (ar.includes('--discard-next')){
    if (ar.indexOf('--discard-next') === ar.length-1) ar.splice(ar.indexOf('--discard-next'), 1);
    else ar.splice(ar.indexOf('--discard-next'), 2);

  }else if (ar.includes('--discard-prev')){
    if (ar.indexOf('--discard-prev') === 0) ar.splice(ar.indexOf('--discard-prev'), 1);
    else ar.splice(ar.indexOf('--discard-prev') -1 , 2);

  }else if (ar.includes('--double-next')){
    if (ar.indexOf('--double-next') === ar.length-1) ar.splice(ar.indexOf('--double-next'), 1);
    else ar.splice(ar.indexOf('--double-next'), 1, ar.indexOf('--double-next')+1);

  }else if (ar.includes('--double-prev')){
    if (ar.indexOf('--double-prev') === 0) ar.splice(ar.indexOf('--double-prev'), 1);
    else ar.splice(ar.indexOf('--double-prev'), 1, ar.indexOf('--double-prev'));
  }
  return ar

}

module.exports = {
  transform
};
