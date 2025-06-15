var RecentCounter = function() {
    this.queue = new Queue()
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    while(this.queue.size() > 0 && this.queue.front() < t - 3000)
        this.queue.dequeue()
    this.queue.enqueue(t)
    return this.queue.size()
};

 