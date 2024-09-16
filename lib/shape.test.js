const { Circle, Square, Triangle } = require('./shapes');

test('Circle renders correctly', () => {
  const shape = new Circle('SVG', 'white', 'green');
  expect(shape.render()).toContain('<circle');
});

test('Square renders correctly', () => {
  const shape = new Square('SVG', 'white', 'green');
  expect(shape.render()).toContain('<rect');
});

test('Triangle renders correctly', () => {
  const shape = new Triangle('SVG', 'white', 'green');
  expect(shape.render()).toContain('<polygon');
});
