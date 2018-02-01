const array = [1, 'red', 'blue', 2, 3, 'green'];

const [first, ...other] = array;
console.log(first, other);

const [a1, a2, a3, a4, a5, a6, a7 = 100500] = array;
console.log(a7);

const [b1, b2, b3, b4, b5, b6, b7 = (() => 200600)()] = array;
console.log(b7);

const [, c1, c2, , , c3] = array;
console.log(c1, c2, c3);


const obj = {
  a: 10,
  b: 20,
  c: function () {
    return 30;
  },
  d: function () {
    return this.a + 30;
  }
}

const {a, b, c, d} = obj;
console.log(a, b, c(), d());
