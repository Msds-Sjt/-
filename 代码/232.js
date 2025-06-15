/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.stackA = []
  this.stackB = []
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.stackA.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if (this.stackB.length > 0) {
    return this.stackB.pop();
  } else {
    if (this.stackA.length === 0) {
      return null
    }
    while (this.stackA.length) {
      this.stackB.push(this.stackA.pop())
    }
    return this.stackB.pop();
  }
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (!this.stackB.length) {
      while(this.stackA.length) {
        this.stackB.push(this.stackA.pop())
      }
    }
    return this.stackB[this.stackB.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.stackA.length + this.stackB.length === 0;
};
 