function fibonacci(n) {
  let hasil = [0, 1];

  for (let i = 2; i < n; i++) {
    hasil.push(hasil[i - 1] + hasil[i - 2]);
  }

  return hasil;
}

console.log(fibonacci(10));
