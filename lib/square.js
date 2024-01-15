const Shapes = require('./shapes');

class Square extends Shapes {
  constructor(color) {
    super(color);
  };

  render(color) {
    return `<rect x="150" y="100" width="300" height="200" fill="${color}"/>`
  };
}

module.exports = Square;