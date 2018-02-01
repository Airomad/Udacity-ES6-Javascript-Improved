function test1(name = 'Guest', age = 20) {
  console.log(`Hello ${name}. Your age is ${age}`);
}

test1(null, 50);
test1(undefined);
test1('Jo');

const test2 = (name = 'Guest2', age = 20) => 
  console.log(`Hello ${name}. Your age is ${age}`);

test2(null, 50);
test2(undefined);
test2('Jo');

// Defaults and destructuring arrays

function createGrid([width = 5, height = 5]) {
  console.log(`Generates a ${width} x ${height} grid`);
}
createGrid([]); // Generates a 5 x 5 grid
createGrid([2]); // Generates a 2 x 5 grid
createGrid([2, 3]); // Generates a 2 x 3 grid
createGrid([undefined, 3]); // Generates a 5 x 3 grid

function createGrid2([width = 5, height = 5] = []) {
  console.log(`Generates a ${width} x ${height} grid`);
}
createGrid2();

// Defaults and destructuring objects

function createSundae({scoops = 1, toppings = ['Hot Fudge']}) {
  const scoopText = scoops === 1 ? 'scoop' : 'scoops';
  console.log(`Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`);
}

createSundae({}); // Your sundae has 1 scoop with Hot Fudge toppings.
createSundae({scoops: 2}); // Your sundae has 2 scoops with Hot Fudge toppings.
createSundae({scoops: 2, toppings: ['Sprinkles']}); // Your sundae has 2 scoops with Sprinkles toppings.
createSundae({toppings: ['Cookie Dough']}); // Your sundae has 1 scoop with Cookie Dough toppings.

function createSundae({scoops = 1, toppings = ['Hot Fudge']} = {}) {
  const scoopText = scoops === 1 ? 'scoop' : 'scoops';
  console.log(`Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`);
}
createSundae();