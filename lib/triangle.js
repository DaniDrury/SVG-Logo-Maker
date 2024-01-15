const Shapes = require('./shapes');

class Triangle extends Shapes {
  constructor(color) {
    super(color);
  };

  render(color) {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${color}"/>`;
  };
}

module.exports = Triangle;