const Shapes = require('./shapes');

class Circle extends Shapes {
  constructor(color) {
    super(color);
  };

  render(color) {
    return `<circle cx="150" cy="100" r="80" fill="${color}"/>`
  };
}

module.exports = Circle;