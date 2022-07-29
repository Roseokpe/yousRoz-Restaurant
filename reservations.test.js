import { displayReservations } from './__mocks__/reservations';

jest.mock('./src/module/reservations.js');
describe('test reservation count', () => {
  test('test one', () => {
    expect(displayReservations()).toBe(1);
  });
  test('test two', () => {
    expect(displayReservations()).toBe(2);
  });
  test('test three', () => {
    expect(displayReservations()).toBe(3);
  });
  test('test four', () => {
    expect(displayReservations()).toBe(4);
  });
  test('test five', () => {
    expect(displayReservations()).toBe(5);
  });
  test('test six', () => {
    expect(displayReservations()).toBe(6);
  });
});
