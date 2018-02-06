const wmap = new WeakMap();

let student1 = {
  name: 'John',
  email: 'sm@gmail.com',
};
let student2 = {
  name: 'Nick',
  email: 'sm2@gmail.com',
}

wmap.set(student1, false);
wmap.set(student2, true);
console.log(wmap);

student1 = null;
setTimeout(() => console.log(wmap), 5000);
