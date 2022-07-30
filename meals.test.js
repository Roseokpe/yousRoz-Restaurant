import display from './__mocks__/home';

jest.mock('./src/module/home.js');
describe('test meals count', () => {
  test('test one', () => {
    expect(display()).toBe(1);
  });
  test('test two', () => {
    expect(display()).toBe(2);
  });
  test('test three', () => {
    expect(display()).toBe(3);
  });
  test('test four', () => {
    expect(display()).toBe(4);
  });
  test('test five', () => {
    expect(display()).toBe(5);
  });
  test('test six', () => {
    expect(display()).toBe(6);
  });
});
