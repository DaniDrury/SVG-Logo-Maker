const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const { join } = require('path');
const validateColor = require('validate-color').default;
const { createLogo } = require('./createLogo');
// const Shape = require('./shapes');
const Circle = require('./circle');
const Triangle = require('./triangle');
const Square = require('./square');

class CLI {
  // initiator method - gets logo text, validates, calls next method
  run() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'logoTxt',
          message: 'Please enter your logo text up to 3 characters max:',
          validate: (logoTxt) => {
            if (logoTxt.length >= 1 && logoTxt.length <= 3) {
              return true;
            }
            console.log('\nYou must enter 1-3 characters.');
            return false;
          }
        }
      ])
      .then(({ logoTxt }) => {
        this.txt = logoTxt;
        return this.getTxtColor();
      })
      .then(() => {
        return writeFile(
          join(__dirname, '..', 'examples', 'logo.svg'),
          createLogo(this));
      })
      .then(() => console.log("Logo SVG created!"))
      .catch((error) => {
        console.log(error);
      });
  }

  // gets logo text color, validates, calls next method
  getTxtColor() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'txtColor',
          message: 'Please choose a color - enter color name or hexidecimal value:',
          validate: (txtColor) => {
            if (validateColor(txtColor)) {
              return true;
            }
            console.log('\nPlease enter a VALID color using color name or hexidecimal value:');
            return false;
          }
        }
      ])
      .then(({ txtColor }) => {
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
          message: 'Please choose a background color - enter color name or hexidecimal value:',
          validate: (txtColor) => {
            if (validateColor(txtColor)) {
              return true;
            }
            console.log('\nPlease enter a VALID color using color name or hexidecimal value:');
            return false;
          }
        }
      ])
      .then(({ shapeColor }) => {
        if (!validateColor(shapeColor)) {
          console.log('Please enter a VALID color using color name or hexidecimal value:');
          return this.getShapeColor();
        }
        this.shapeColor = shapeColor;
        switch (this.shape) {
          case 'circle':
            const circle = new Circle();
            this.shape = circle.render(this.shapeColor);
            break;
          case 'triangle':
            const triangle = new Triangle();
            this.shape = triangle.render(this.shapeColor);
            break;
          case 'square':
            const square = new Square();
            this.shape = square.render(this.shapeColor);
            break;
          default:
            throw new Error('Shape was not identified.');
        }
      });
  }
}

module.exports = CLI;