const inquirer = require('inquirer');
const fs = require('fs');
const validateColor = require('validate-color').default; 

class CLI {
  // initiator method - gets logo text, validates, calls next method
  run() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'logoTxt',
          message: 'Please enter your logo text up to 3 characters max:'
        }
      ])
      .then(({ logoTxt }) => {
        if (logoTxt.length < 1 || logoTxt.length > 3) {
          console.log('You must enter 1-3 characters only.');
          return this.run();
        }
        this.txt = logoTxt;
        return this.getTxtColor();
      });
  }

  // gets logo text color, validates, calls next method
  getTxtColor() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'txtColor',
          message: 'Please choose a color - enter color name or hexidecimal value:'
        }
      ])
      .then(({ txtColor }) => {
        if (!validateColor(txtColor)) {
          console.log('Please enter a VALID color using color name or hexidecimal value:');
          return this.getTxtColor();
        }
        this.txtColor = txtColor;
        return this.getShape();
      });
  }

  // get logo shape, calls next method
  getShape() {
    return inquirer
      .prompt([
        {
          type: 'list',
          name: 'shape',
          message: 'Please select the shape of your logo:',
          choices: [
            'circle',
            'triangle',
            'square'
          ],
          default: 'circle'
        }
      ])
      .then(({ shape }) => {
        this.shape = shape;
        return this.getShapeColor();
      });
  };

  // get logo background (or shape) color, validates, """sends new object to shapes class""""
  getShapeColor() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'shapeColor',
          message: 'Please choose a background color - enter color name or hexidecimal value:'
        }
      ])
      .then(({ shapeColor }) => {
        if (!validateColor(shapeColor)) {
          console.log('Please enter a VALID color using color name or hexidecimal value:');
          return this.getShapeColor();
        }
        this.shapeColor = shapeColor;
      });
  }
}

module.exports = CLI;