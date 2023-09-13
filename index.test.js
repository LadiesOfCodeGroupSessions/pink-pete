const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

const cakes = require('./cakes');

describe(cakes, () => {
test('bakes 2 cakes', () => {
    expect(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}) ).toBe(2);
  });

test('bakes 0 cakes', () => {
  expect(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000})).toBe(0);
  });
});
