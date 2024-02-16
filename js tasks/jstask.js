function calculateTotal(number) {
  // Change code below this line
  let total;

  for (let i = number; i >= 1; i -= 1) {
    total += i;
  }
  return total;

  // Change code above this line
}
calculateTotal(24);
console.log(calculateTotal(24));
