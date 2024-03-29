class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        // 동일한 값이 있다면
        if (value === current.value) return undefined;
        // 루트보다 값이 작다면
        if (value < current.value) {
          // 루트의 왼쪽 노드가 없다면
          if (current.left === null) {
            current.left = newNode;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    // 10
    let current = this.root,
      found = false;

    while (current && !found) {
      // value = 2, current.value = 10
      if (value < current.value) {
        // 왼쪽 노드로 이동
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        // 값을 찾음
        found = true;
      }
    }
    if (!found) return undefined;
    // found가 true일때
    return current;
  }
  contains(value) {
    if (this.root === null) return false;
    // 10
    let current = this.root,
      found = false;

    while (current && !found) {
      // value = 2, current.value = 10
      if (value < current.value) {
        // 왼쪽 노드로 이동
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        // 값을 찾음
        return true;
      }
    }
    // left 나 right 가 없으면 current가 null로 할당되면서 while문에서 나옴
    return false;
  }
}

//  10
// 5  13

let tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
