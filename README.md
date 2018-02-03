# Udacity ES6 Javascript Improved Notes


## Notes:
- **Destructuring** - Borrows inspiration from languages like Perl and Python by allowing you to specify the elements you want to extract from an array or object on the left side of an assignment. 
- **Variadic functions** - Functions that take an indefinite number of arguments.
- **Concise Body Syntax** - The format of the function body. The concise syntax:
  * has no curly braces surrounding the function body
  * and automatically returns the expression.
- **Block Body Syntax** - The block statement is often called compound statement in other languages. It allows you to use multiple statements where JavaScript expects only one statement.
- **The Iterator Protocol** - is used to define a standard way that an object produces a sequence of values. What that really means is you now have a process for defining how an object will iterate. This is done through implementing the __.next()__ method.

## Useful links:
- [String Interpolation on Wikipedia](https://en.wikipedia.org/wiki/String_interpolation)
- [The Iterable Protocol on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
- [You Don't Know JS: this & Object Prototypes](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch2.md)

## Snippets:
### How the Iterator works:
```javascript
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayIterator = digits[Symbol.iterator]();

console.log(arrayIterator.next());
console.log(arrayIterator.next());

// Object {value: 0, done: false}
// Object {value: 1, done: false}
``` 
