class Shapes {
  constructor(txt, txtColor, shapeColor) {
    this.txt = txt;
    this.txtColor = txtColor;
    this.shapeColor = shapeColor;
  };

  setColor(shapeColor) {
    this.shapeColor = shapeColor;
  }

  renderTxtCode() {
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.txtColor}">${this.txt}</text>`;
  }
}

module.exports = Shapes;