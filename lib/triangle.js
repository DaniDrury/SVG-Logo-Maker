const Shapes = require('./shapes');

class Triangle extends Shapes {
  constructor(txt, txtColor, shapeColor) {
    super(txt, txtColor, shapeColor);
  };

  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
  };

  renderTxtCode() {
    return `<text x="150" y="165" font-size="60" text-anchor="middle" fill="${this.txtColor}">${this.txt}</text>`;
  }
}

module.exports = Triangle;