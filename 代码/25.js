var reverseKGroup = function(head, k) {
    // 统计节点个数
    let n = 0;
    for (let cur = head; cur; cur = cur.next) {
        n++;
    }

    const dummy = new ListNode(0, head);
    let p0 = dummy;
    let pre = null;
    let cur = head;

    // k 个一组处理
    for (; n >= k; n -= k) {
        for (let i = 0; i < k; i++) { // 同 92 题
            const nxt = cur.next;
            cur.next = pre; // 每次循环只修改一个 next，方便大家理解
            pre = cur;
            cur = nxt;
        }

        // 见视频
        const nxt = p0.next;
        p0.next.next = cur;
        p0.next = pre;
        p0 = nxt;
    }
    return dummy.next;
}; 