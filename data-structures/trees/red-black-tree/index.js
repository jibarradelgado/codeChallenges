class Node {
  constructor(key, color) {
    this.key = key;
    this.color = color;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

class RedBlackTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    const newNode = new Node(key, "red");
    let current = this.root;
    let parent = null;

    while (current) {
      parent = current;
      if (newNode.key < current.key) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    newNode.parent = parent;

    if (!parent) {
      this.root = newNode;
    } else if (newNode.key < parent.key) {
      parent.left = newNode;
    } else {
      parent.right = newNode;
    }

    this.fixTree(newNode);
  }

  fixTree(node) {
    while (node.parent && node.parent.color === "red") {
      let parent = node.parent;
      let grandparent = node.parent.parent;

      if (parent === grandparent.left) {
        let uncle = grandparent.right;

        if (uncle && uncle.color === "red") {
          grandparent.color = "red";
          parent.color = "black";
          uncle.color = "black";
          node = grandparent;
        } else {
          if (node === parent.right) {
            this.rotateLeft(parent);
            node = parent;
            parent = node.parent;
          }

          parent.color = "black";
          grandparent.color = "red";
          this.rotateRight(grandparent);
        }
      } else {
        let uncle = grandparent.left;

        if (uncle && uncle.color === "red") {
          grandparent.color = "red";
          parent.color = "black";
          uncle.color = "black";
          node = grandparent;
        } else {
          if (node === parent.left) {
            this.rotateRight(parent);
            node = parent;
            parent = node.parent;
          }

          parent.color = "black";
          grandparent.color = "red";
          this.rotateLeft(grandparent);
        }
      }
    }

    this.root.color = "black";
  }

  rotateLeft(node) {
    let right = node.right;
    node.right = right.left;

    if (right.left) {
      right.left.parent = node;
    }

    right.parent = node.parent;

    if (!node.parent) {
      this.root = right;
    } else if (node === node.parent.left) {
      node.parent.left = right;
    } else {
      node.parent.right = right;
    }

    right.left = node;
    node.parent = right;
  }

  rotateRight(node) {
    let left = node.left;
    node.left = left.right;

    if (left.right) {
      left.right.parent = node;
    }

    left.parent = node.parent;

    if (!node.parent) {
      this.root = left;
    } else if (node === node.parent.right) {
      node.parent.right = left;
    } else {
      node.parent.left = left;
    }

    left.right = node;
    node.parent = left;
  }

  search(key) {
    let current = this.root;

    while (current) {
      if (key === current.key) {
        return true;
      }

      if (key < current.key) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }
}