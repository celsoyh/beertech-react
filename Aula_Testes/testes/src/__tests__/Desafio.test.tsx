import Calculator from "../math/Calculator";

test('Class Calculator soma 1 + 2 deve ser igual a 3', () => {
  const calculadora = new Calculator(1);
  calculadora.sum(2);
  expect(calculadora.getResult()).toBe(3);
});

test('Class Calculator subtração 10 - 2 deve ser igual a 8', () => {
  const calculadora = new Calculator(10);
  calculadora.sub(2);
  expect(calculadora.getResult()).toBe(8);
});

test('Class Calculator 2 potencia de 2 (2^2) deve ser igual a 4', () => {
  const calculadora = new Calculator(2);

  calculadora.pow(2);

  expect(calculadora.getResult()).toBe(4)
});

test('Class Calculator conta 10 - 20 deve ser igual a -10', () => {
  const calculadora = new Calculator(10);

  calculadora.sub(20);

  expect(calculadora.getResult()).toBe(-10)
});

test('Class Calculator conta 10 + 20 - 30 deve ser igual a 0', () => {
  const calculadora = new Calculator(10);

  calculadora.sum(20);

  calculadora.sub(30)

  expect(calculadora.getResult()).toBe(0)
});

test('Class Calculator conta (23 + 48 - 27) ^ 3 deve ser igual a 85184', () => {
  const calculadora = new Calculator(23);

  calculadora.sum(48)

  calculadora.sub(27)

  calculadora.pow(3)

  expect(calculadora.getResult()).toBe(85184)
});

test('Class Calculator conta "(5 - 3) ^ 3" deve ser igual a 8', () => {
  const calculadora = new Calculator(5);

  calculadora.sub(3)

  calculadora.pow(3);

  expect(calculadora.getResult()).toBe(8)
});

test('Class Calculator conta "10 + 43.2 - 23.77 ^ 2" deve ser igual a −511.8129', () => {
  const calculadora = new Calculator(-(new Calculator(23.77).pow(2).getResult()));

  calculadora.sum(10)

  calculadora.sum(43.2)

  expect(calculadora.getResult().toFixed(4)).toBe("-511.8129");
});

test('Class Calculator conta "12 + 32 / 5" deve ser igual a 18.4', () => {
  const calculadora = new Calculator(32);

  calculadora.divide(5);

  calculadora.sum(12)

  expect(calculadora.getResult()).toBe(18.4);
});

test('Class Calculator conta "5.5 + 125 ^ 2 / 2 - 33" deve ser igual a 97.5', () => {
  const calculadora = new Calculator(125);

  calculadora.pow(new Calculator(2).divide(2).getResult())

  calculadora.sum(5.5)

  calculadora.sub(33)

  expect(calculadora.getResult()).toBe(97.5);
});