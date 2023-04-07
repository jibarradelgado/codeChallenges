class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // add a node to the end of the list
  append(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
  }

  // add a node to the beginning of the list
  prepend(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
  }

  // insert a node at a given index
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
    let previous = null;

    for (let i = 0; i < index; i++) {
      previous = current;
      current = current.next;
    }

    previous.next = node;
    node.next = current;
    this.length++;
  }

  // remove the first node with the given value
  remove(value) {
    if (!this.head) {
      return null;
    }

    if (this.head.value === value) {
      this.head = this.head.next;

      if (!this.head) {
        this.tail = null;
      }

      this.length--;
      return;
    }

    let current = this.head;
    let previous = null;

    while (current && current.value !== value) {
      previous = current;
      current = current.next;
    }

    if (!current) {
      return null;
    }

    previous.next = current.next;

    if (previous.next === null) {
      this.tail = previous;
    }

    this.length--;
  }

  // get the value of the node at a given index
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

  // set the value of the node at a given index
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

  // get the length of the list
  size() {
    return this.length;
  }

  // check if the list is empty
  isEmpty() {
    return this.length === 0;
  }

  
}