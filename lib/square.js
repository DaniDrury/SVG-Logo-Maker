const Shapes = require('./shapes');

class Square extends Shapes {
  constructor(color) {
    super(color);
  };

  render(color) {
    return `<rect x="75" y="25" width="150" height="150" fill="${color}"/>`
  };
}

module.exports = Square;