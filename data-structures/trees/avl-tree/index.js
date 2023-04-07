class AVLTree {
  constructor() {
    this.root = null;
  }

  // Helper function to get the height of the tree
  getHeight(node) {
    if (node === null) {
      return 0;
    }
    return node.height;
  }

  // Helper function to get the balance factor of a node
  getBalance(node) {
    if (node === null) {
      return 0;
    }
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  // Helper function to perform a right rotation
  rightRotate(y) {
    const x = y.left;
    const t2 = x.right;

    x.right = y;
    y.left = t2;

    y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
    x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;

    return x;
  }

  // Helper function to perform a left rotation
  leftRotate(x) {
    const y = x.right;
    const t2 = y.left;

    y.left = x;
    x.right = t2;

    x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
    y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

    return y;
  }

  // Recursive function to insert a node in the AVL tree
  insertNode(node, key) {
    if (node === null) {
      return new Node(key);
    }

    if (key < node.key) {
      node.left = this.insertNode(node.left, key);
    } else if (key > node.key) {
      node.right = this.insertNode(node.right, key);
    } else {
      return node; // Duplicate keys are not allowed in the tree
    }

    node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;

    const balance = this.getBalance(node);

    // Left Left Case
    if (balance > 1 && key < node.left.key) {
      return this.rightRotate(node);
    }

    // Right Right Case
    if (balance < -1 && key > node.right.key) {
      return this.leftRotate(node);
    }

    // Left Right Case
    if (balance > 1 && key > node.left.key) {
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }

    // Right Left Case
    if (balance < -1 && key < node.right.key) {
      node.right = this.rightRotate(node.right);
      return this.leftRotate(node);
    }

    return node;
  }

  // Wrapper function to insert a node in the AVL tree
  insert(key) {
    this.root = this.insertNode(this.root, key);
  }

  // Recursive function to traverse the tree in order
  inOrderTraversal(node, result) {
    if (node !== null) {
      this.inOrderTraversal(node.left, result);
      result.push(node.key);
      this.inOrderTraversal(node.right, result);
    }
  }

  // Wrapper function to get the nodes of the tree in order
  getNodesInOrder() {
    const result = [];
    this.inOrderTraversal(this.root, result);
    return result;
  }
}

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}