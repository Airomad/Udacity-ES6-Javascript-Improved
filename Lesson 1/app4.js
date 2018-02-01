const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arrayConcat = [...arr1, ...arr2];
console.log(arrayConcat);

const obj1 = {
  a: 1,
  b: 2,
};
const obj2 = {
  c: 3,
  d: 4,
};
const objConcat = {...obj1, ...obj2};
console.log(objConcat);

function sum(...numbers) {
  let total = 0;
  for (num of numbers) {
    total += num;
  }
  return total;
}
console.log(sum(1, 50, 0, 2345, 3));