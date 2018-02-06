const map = new Map();

const student1 = {
  name: 'John',
  email: 'sm@gmail.com',
};
const student2 = {
  name: 'Nick',
  email: 'sm2@gmail.com',
}

map.set(student1.name, student1);
map.set(student2.name, student2);
console.log(map);

map.delete(student1.name);
console.log(map);

const keyIt = map.keys();
console.log(keyIt.next());
console.log(keyIt.next());

const velueIt = map.values();
console.log(velueIt.next());
console.log(velueIt.next());

console.log(map.has(student2.name));
console.log(map.get(student2.name));

map.set(student1.name, student1);

for (const entry of map) {
  console.log(entry);
}

for (const [key, value] of map) {
  console.log(key, value);
}
