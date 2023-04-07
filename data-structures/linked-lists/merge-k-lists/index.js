class Node {
  constructor(val, next = null, prev = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  mergeTwoLists(l1, l2) {
    const dummy = new Node(0);
    let tail = dummy;

    //merge the lists
    while (l1 && l2) {
      if (l1.val < l2.val) {
        tail.next = l1;
        l1.prev = tail;
        l1 = l1.next;
      } else {
        tail.next = l2;
        l2.prev = tail;
        l2 = l2.next;
      }
      tail = tail.next;
    }

    //once one of the lists is over, we merge the remaining part of the other list.
    if (l1) {
      tail.next = l1;
      l1.prev = tail;
    } else {
      tail.next = l2;
      l2.prev = tail;
    }

    return dummy.next;
  }

  mergeKLists(lists) {
    if (!lists || lists.length === 0) return null;

    const n = lists.length;
    let interval = 1;

    while (interval < n) {
      for (let i = 0; i < n - interval; i += interval * 2) {
        lists[i] = this.mergeTwoLists(lists[i], lists[i + interval]);
      }
      interval *= 2;
    }

    return lists[0];
  }
}