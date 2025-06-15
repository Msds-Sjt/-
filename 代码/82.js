/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let dummy = new ListNode(-1, head)
    let p = dummy
    while(p.next){
        let q = p.next
        while(q && q.val == p.next.val){
            q = q.next
        }
        if(q == p.next.next) p = p.next
        else p.next = q
    }
    return dummy.next
}; 