const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayIterator = digits[Symbol.iterator]();

let it = arrayIterator.next();

while (!it.done) {
  console.log(it.value);
  it = arrayIterator.next();
}