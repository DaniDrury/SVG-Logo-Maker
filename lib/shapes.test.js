// const { describe } = require('yargs');
const Triangle = require('./triangle');
// const { default: test } = require('node:test');

// Example test that should pass
describe("Triangle", () => {
  describe('render', () => {
    test('return svg string for triangle shape', () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
  })
});
