'use strict';

const Stack = function Stack( ) {
  this._size = 0;
  this._storage = {};

  for (let i = 0; i < arguments.length; i++) {
    this._storage[[i]] = arguments[i];
  }
};

Stack.prototype.push = function push(value) {
for (let i = 0; i < arguments.length; i++) {
this._storage[this._size] = value;
this._size += 1;
return this;

}
};












Stack.prototype.pop = function pop() {
  let size = this._size;
  let target = size - 1;
  let deleted;

  // remove newest value from storage and decrement size counter, only if data
  // exists

  if (size > 0) {
    deleted = this._storage[target];
    delete this._storage[target];

    this._size--;
  }

  return deleted;
};

module.exports = Stack;
