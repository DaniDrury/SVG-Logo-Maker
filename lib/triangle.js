const Shapes = require('./shapes');

class Triangle extends Shapes {
  constructor(color) {
    super(color);
  };

  render(color) {
    return `<polygon points = "150,0 0,200 300,200" fill="${color}"/>`;
  };
}

module.exports = Triangle;