const nums = new Set(['one', 'two', 'three', 'one']);
nums.add('four');
nums.delete('two');

console.log(nums);

console.log(nums.size);

console.log(nums.has('one') ? 'Number is in the set' : 'Nothing found');

console.log(nums.values());

for (num of nums) {
  console.log(num);
}

nums.clear();
console.log(nums);