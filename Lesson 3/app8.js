function* getEmployee() {
  console.log('the function has started');

  const prefix = yield;
  const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

  for (const name of names) {
      yield `${prefix} - ${name}`;
  }

  console.log('the function has ended');
}

const iterator = getEmployee();
iterator.next();
console.log(iterator.next('first').value);
console.log(iterator.next('second').value);
console.log(iterator.next('third').value);