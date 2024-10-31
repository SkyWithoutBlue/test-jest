// calculator.test.js
/* Тесты для функции calculator где мы прописываем что мы ожидаем на выходе */
const { add } = require("../calculator");

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("add throws error for non-numeric inputs", () => {
  expect(() => add(1, "2")).toThrow("Inputs must be numbers");
});
