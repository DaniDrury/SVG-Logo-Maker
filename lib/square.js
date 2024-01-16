const Shapes = require('./shapes');

class Square extends Shapes {
  constructor(txt, txtColor, shapeColor) {
    super(txt, txtColor, shapeColor);
  };

  render() {
    return `<rect x="75" y="25" width="150" height="150" fill="${this.shapeColor}" />`
  };
}

module.exports = Square;