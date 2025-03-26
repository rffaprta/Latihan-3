const kalkulator = (operator, ...angka) => {
  if (angka.length < 2) {
    return "Harus 2 angka!";
  }

  switch (operator) {
    case "+":
      return angka.reduce((a, b) => a + b);
    case "-":
      return angka.reduce((a, b) => a - b);
    case "*":
      return angka.reduce((a, b) => a * b);
    case "/":
      return angka.reduce((a, b) => a / b);
    case "%":
      return angka.reduce((a, b) => a % b);
    default:
      return "Salah!";
  }
};

console.log(kalkulator("+", 10, 5, 2));
console.log(kalkulator("-", 10, 5));
console.log(kalkulator("*", 2, 3, 4));
console.log(kalkulator("/", 20, 2));
console.log(kalkulator("%", 10, 3));
