/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.queue1 = [];
    this.queue2 = [];
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue1.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    while (this.queue1.length !== 1) {
        this.queue2.push(this.queue1.shift());
    }
    let temp = this.queue1.shift();
    while (this.queue2.length !== 0) {
        this.queue1.push(this.queue2.shift());
    }
    return temp;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.queue1[this.queue1.length - 1];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    if (this.queue1.length === 0) {
        return true;
    } else {
        return false;
    }
};
 