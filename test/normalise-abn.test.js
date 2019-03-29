const NormaliseAbn = require('..');

test('handles null', () => {
  expect(NormaliseAbn(null, '1')).toBe(null);
});

test('handles null', () => {
  expect(NormaliseAbn('', null)).toBe('');
});

test('adds a dash', () => {
  expect(NormaliseAbn('1', '1')).toBe('1');
});

test('adds a dash', () => {
  expect(NormaliseAbn('12', '1')).toBe('12 ');
});

test('adds a space', () => {
  expect(NormaliseAbn('123', '1')).toBe('12 3');
});

test('adds a space', () => {
  expect(NormaliseAbn('12345', '1')).toBe('12 345 ');
});

test('adds a space', () => {
  expect(NormaliseAbn('aaaaaaaa', '1')).toBe('');
});

test('adds a space', () => {
  expect(NormaliseAbn('11111111', '1')).toBe('11 111 111');
});

test('adds a space', () => {
  expect(NormaliseAbn('32614957676', '32')).toBe('32 614 957 676');
});

test('adds a space', () => {
  expect(NormaliseAbn('3 2 614 95 767611111', '32614957676')).toBe('32 614 957 676');
});
