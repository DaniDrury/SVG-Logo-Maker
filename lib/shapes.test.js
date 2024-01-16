const Triangle = require('./triangle');
const Square = require('./square');
const Circle = require('./circle');

// Example test that should pass for Triangle Class
describe("Triangle", () => {
  describe('render', () => {
    test('returns SVG code string for triangle shape', () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
  })
});

describe("Square", () => {
  describe('render', () => {
    test('returns SVG code string for square shape', () => {
      const shape = new Square();
      shape.setColor("blue");
      expect(shape.render()).toEqual('<rect x="75" y="25" width="150" height="150" fill="blue" />');
    });
  })
});

describe("Circle", () => {
  describe('render', () => {
    test('returns SVG code string for circle shape', () => {
      const shape = new Circle();
      shape.setColor("blue");
      expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
    });
  })
});