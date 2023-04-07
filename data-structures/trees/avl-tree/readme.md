AVL tree, a self-balancing binary search tree. Here's how it works:

First, we define a Node class to represent each node in the AVL tree. Each node has a value, a height, and left and right child nodes. The height is the maximum number of edges from the node to a leaf node.

The AVLTree class is the main class that represents the AVL tree. It has a root node and several methods for inserting, deleting, and searching for nodes in the tree.

The insert method takes a value as input and creates a new Node with that value. It then recursively inserts the new node into the tree using the _insertNode method, which keeps track of the heights of the nodes and rotates the tree if necessary to maintain balance.

The _insertNode method recursively traverses the tree to find the correct position for the new node. It then inserts the node and updates the heights of the ancestor nodes. If the height difference between the left and right subtrees of a node is greater than 1, the method performs one or two rotations to balance the tree.

The delete method takes a value as input and recursively deletes the node with that value from the tree using the _deleteNode method. This method also keeps track of the heights of the nodes and rotates the tree if necessary to maintain balance.

The _deleteNode method recursively traverses the tree to find the node to delete. Once the node is found, it is deleted and the heights of the ancestor nodes are updated. If the height difference between the left and right subtrees of a node is less than -1 or greater than 1, the method performs one or two rotations to balance the tree.

The search method takes a value as input and recursively searches the tree for the node with that value. If the node is found, the method returns true. Otherwise, it returns false.

Overall, the AVL tree implementation uses recursion to maintain balance and keep track of the heights of the nodes. It ensures that the tree remains balanced, which allows for efficient insertion, deletion, and search operations.