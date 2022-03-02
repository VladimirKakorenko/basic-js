const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let team = '';
  if (Array.isArray(members)){
    members.forEach(i => {
      if (typeof i === "string"){
        i = i.replace(/ /gi, '')
        let j = i[0].toUpperCase();
        team += j
      }else return false
    })
  }

  let tm = [];
  for (let x = 0; x < team.length; x++){
    tm.push(team[x])
  }
  tm.sort();
  return tm.join('')
}

module.exports = {
  createDreamTeam
};
