class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const node = new Node(value);

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

  prepend(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }

    this.length++;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      throw new Error('Invalid index');
    }

    if (index === 0) {
      return this.prepend(value);
    }

    if (index === this.length) {
      return this.append(value);
    }

    const node = new Node(value);
    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    node.prev = current.prev;
    node.next = current;
    current.prev.next = node;
    current.prev = node;

    this.length++;
  }

  remove(value) {
    if (!this.head) {
      return null;
    }

    if (this.head.value === value) {
      this.head = this.head.next;

      if (!this.head) {
        this.tail = null;
      } else {
        this.head.prev = null;
      }

      this.length--;
      return;
    }

    if (this.tail.value === value) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.length--;
      return;
    }

    let current = this.head;

    while (current && current.value !== value) {
      current = current.next;
    }

    if (!current) {
      return null;
    }

    current.prev.next = current.next;
    current.next.prev = current.prev;
    this.length--;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current.value;
  }

  set(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Invalid index');
    }

    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    current.value = value;
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }
}