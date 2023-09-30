class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  contains(value) {
    if (!this.root) return false;

    let currentNode = this.root;
    let nodeLookupPosition = null; // "left" | "right"

    while (currentNode) {
      if (currentNode.value === value) return true;

      nodeLookupPosition = value > currentNode.value ? "right" : "left";

      currentNode = currentNode[nodeLookupPosition];
    }

    return false;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;

      return this;
    }

    let currentNode = this.root;
    let newNodePosition = null; // "left" | "right"

    while (currentNode) {
      if (currentNode.value === value) return null;

      newNodePosition = value > currentNode.value ? "right" : "left";

      if (!currentNode[newNodePosition]) {
        currentNode[newNodePosition] = newNode;

        return this;
      }

      currentNode = currentNode[newNodePosition];
    }
  }

  minimumValue(currentNode = this.root) {
    if (currentNode === null) return null;

    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode;
  }
}

/***  Usage example: ***/
// const myTree = new BinarySearchTree();

// myTree.insert(47);
// myTree.insert(21);
// myTree.insert(76);
// myTree.insert(18);
// myTree.insert(52);
// myTree.insert(82);
// myTree.insert(27);

// console.log(myTree);
// console.log(myTree.contains(21));
// console.log(myTree.minimumValue());
