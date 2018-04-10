'use strict';

class BinarySearchTree {
  // it's not necessary to have a key and value param. if you have complex data, such as customer info that's attached to a customer ID, then you'll want to use something like keys && values. For simpler info like a name or number, you just need a key.
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }


  /* ============================ 
  INSERT
  ============================*/
  insert(key, value) {

    if (this.key === null) { // if the current key is empty (i.e. the tree is empty)
      this.key = key; // update this.key to equal to the key we passed in
      this.value = value; // update this.value to equal to the key we passed in
    }

    else if (key <= this.key) { // if the passed in key is less than or equal to the current key
      if (this.left === null) { // and if there is no left child
        this.left = new BinarySearchTree(key, value, this); // create a left child node using the arg's passed in
      }
      else { // if there's already a left child
        this.left.insert(key, value); // run the insert function recursively on the left child
      }
    }

    else { // if the passed in key is greater than the current key
      if (this.right === null) { // and if there is no right child
        this.right = new BinarySearchTree(key, value, this); // create a right child node using the arg's passed in
      }
      else { // if there's already a right child
        this.right.insert(key, value); // run the insert function recursively on the left child
      }
    }
  }



  /* ============================ 
  REMOVE
  ============================*/
  remove(key) { // 4

    if (this.key === key) { // if the current key is the key we're looking for
      if (this.left && this.right) { // if the current key has a left AND right child
        const successor = this.right._findMin(); // find the successor node using the private findMin function
        this.key = successor.key; // replace the current node's key, with the key of the successor. 
        this.value = successor.value; // replace the current/parent node's value, with the value of the successor
        successor.remove(successor.key); // the successor is now the parent, so run the remove func on the successor so there aren't duplicates
      }  
      else if (this.left) { // if the current key has a left child
        this._replaceWith(this.left); // run the private replaceWith function on the left child
      }
      else if (this.right) { // if the current key has a right child
        this._replaceWith(this.right); // run the private replaceWith function on the right child
      }
      else { // if the current node has no children
        this._replaceWith(null); // then delete the current node and all references to it
      }
    }

    else if (key < this.key && this.left) { // if the key we're looking to remove is less than the current key AND the current key has a left child
      this.left.remove(key); // run the remove function recursively on the left child
    }

    else if (key > this.key && this.right) { // if the key we're looking to remove is greater than the current key AND the current key has a right child
      this.right.remove(key); // run the remove function recursively on the right child
    }

    else { // if none of the above conditions are met, the key doesn't exist in this tree
      throw new Error('Key Error');
    }
  }



  /* ============================ 
  FIND
  ============================*/
  find(key) {
    
    if (this.key === key) { // if the key we're looking for is the current key
      return this.value; // return the value of the root node
    }
   
    else if (key < this.key && this.left) { // if the key we're trying to find is less than the current key AND there's a left child node
      return this.left.find(key); // run the find function recursively on the left child
    }
    
    else if (key > this.key && this.right) { // if the key we're trying to find is greater than the current key AND there's a right child node
      return this.right.find(key); // run the find function recursively on the right child
    }
 
    else { // if none of the above conditions are met, the key doesn't exist in this tree
      throw new Error('Key Error');
    }
  }



  /* ============================ 
  PRIVATE HELPER FUNCTIONS
  ============================*/
  _findMin() {
    if (!this.left) { // if there's no left child 
      return this; // return the value of this.right that this function was called on
    }
    return this.left._findMin(); // run the findMin function recursively on this.left
  }


  _replaceWith(node) {
    // the node passed in is either the left child or right child of the key that matches the key we're trying to delete. 
    // if the key we're deleting has no childre, we pass in null
    
    if (this.parent) { // if the node we're trying delete has a truthy parent prop
      if (this === this.parent.left) { // and if the node we passed in is the same one that our soon to be deleted parent's left is referencing
        this.parent.left = node; // replace our soon to be deleted node's parent.left value with the node we passed in
      }
      else if (this === this.parent.right) { // and if the node we passed in is the same one that our soon to be deleted parent's right is referencing
        this.parent.right = node; // replace our soon to be deleted node's parent.right value with the node we passed in
      }

      if (node) { // and if the node passed in is truthy
        node.parent = this.parent; // set the parent of the passed in node to be the parent of the node we're about to delete
      }
    }

    else { // if the node passed in has a falsy parent prop (i.e., the head)
      if (node) { // and if the node passed in is truthy
        // make the node we passed in be the head of the tree
        this.key = node.key; 
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      }
      else { // and if the node is falsy
        // set the head to null, thus the tree is empty
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

}

module.exports = BinarySearchTree;