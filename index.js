
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var sortedListToBST = function(head) {
    const values = [];
    while (head) {
        values.push(head.val);
        head = head.next;
    }
    
    function buildBST(left, right) {
        if (left > right) {
            return null;
        }
        
        const mid = Math.floor((left + right) / 2);
        const node = new TreeNode(values[mid]);
        
        node.left = buildBST(left, mid - 1);
        node.right = buildBST(mid + 1, right);
        
        return node;
    }
    
    return buildBST(0, values.length - 1);
};



