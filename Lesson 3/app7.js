var richard = {status: 'looking for work'};
var agent = new Proxy(richard, {});

console.log(agent.status);

const handler = {
  get(target, propName) {
      console.log(target);
      console.log(propName);
      if (propName === 'status') {
        return 'ooops';
      } else {
        return target[propName];
      }
  },
  set(target, propName, value) {
    if (propName === 'payRate') { // if the pay is being set, take 15% as commission
        value = value * 0.85;
    }
    target[propName] = value;
  }
};
const agent2 = new Proxy(richard, handler);
agent2.status = 'jsdkfj';
console.log(agent2.status);

agent2.payRate = 1200;
console.log(agent2.payRate);

