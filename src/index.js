
// You should implement your task here.

const { sort } = require("semver")

module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix.length === 0) return []
  for (let index = 0; index < matrix.length; index++) {
    if ((index & 1) === 0) matrix[index].sort((a,b) => {return a - b})
    else matrix[index].sort((a,b) => {return b - a})
  }
  return matrix.reduce((acc,value) => {return acc.concat(value)})
}