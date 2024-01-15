const userInput = require('./cli');

// may need to change parameters - not sure where this function is being called from yet
function createLogo({ txt, txtColor, shape }) {
  // test code
  return `
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
      ${shape}
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${txtColor}">${txt}</text>
    </svg>`
};

module.exports = { createLogo };