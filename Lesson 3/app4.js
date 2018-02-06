const unSet = new WeakSet();

const test1 = {
  a: 10,
  b: 20,
};
const test2 = {
  a: 20,
  b: 30,
};

unSet.add(test1);
unSet.add(test2);
unSet.add(test1);
console.log(unSet);

unSet.delete(test1);
console.log(unSet);

unSet.add(test1);
console.log(unSet);