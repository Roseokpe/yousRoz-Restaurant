import { displayPopup } from './__mocks__/popup.js';

jest.mock('./src/module/popup.js');
describe('test comments count', () => {
  test('test one', () => {
    expect(displayPopup()).toBe(1);
  });
  test('test two', () => {
    expect(displayPopup()).toBe(2);
  });
  test('test three', () => {
    expect(displayPopup()).toBe(3);
  });
  test('test four', () => {
    expect(displayPopup()).toBe(4);
  });
  test('test five', () => {
    expect(displayPopup()).toBe(5);
  });
  test('test six', () => {
    expect(displayPopup()).toBe(6);
  });
});
