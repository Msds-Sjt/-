/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let queue = [];
    let length = nums.length;
    const maxQueue = function(queue, number) {
        while (queue.length !== 0 && number > queue[queue.length - 1]) {
            queue.pop();
        }
        queue.push(number);
    }
    for (let i = 0; i < k; i++) {
        maxQueue(queue, nums[i])
    }
    let res = [];
    for (let i = k; i < length; i++) {
        res.push(queue[0]);
        if (nums[i - k] === queue[0]) {
            queue.shift();
        }
        maxQueue(queue, nums[i]);
    }
    res.push(queue[0]);
    return res;
}; 