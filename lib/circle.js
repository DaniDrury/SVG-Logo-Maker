const Shapes = require('./shapes');

class Circle extends Shapes {
  constructor(txt, txtColor, shapeColor) {
    super(txt, txtColor, shapeColor);
  };

  render(color) {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
  };
}

module.exports = Circle;