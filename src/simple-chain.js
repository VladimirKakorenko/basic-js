const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arrayChain: [],
  arrayChainEnd: [],
  getLength() {
    return this.arrayChain.length
  },
  addLink( value ) {
    this.arrayChain.push(`( ${value} )`);
    return this
  },
  removeLink(position) {
    if(position > this.arrayChain.length || typeof position !== 'number' || position <= 0){
      this.arrayChain = [];
      throw new Error('You can\'t remove incorrect link!')
    }
    this.arrayChain = this.arrayChain.filter((value, index) => index !== position-1);
    return this
  },
  reverseChain() {
    this.arrayChain.reverse();
    return this
  },
  finishChain() {
    this.arrayChainEnd = this.arrayChain;
    this.arrayChain = [];
    return this.arrayChainEnd.join('~~');
  }
};

module.exports = {
  chainMaker
};
