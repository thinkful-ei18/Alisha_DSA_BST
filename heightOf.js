'use strict';
/*
Write an algorithm to find the height of a binary search tree. What is the run time of your algorithm?
*/

const BinarySearchTree = require('./BinarySearchTree');
const util = require('util');

const Binary = new BinarySearchTree();

Binary.insert(3, null);
Binary.insert(1, null);
Binary.insert(4, null);
Binary.insert(6, null);
Binary.insert(9, null);
Binary.insert(2, null);
Binary.insert(5, null);
Binary.insert(7, null);
// Binary.insert(8, null);
// Binary.insert(10, null);

const height = (BST, num) => {
  // start at the head
  // add one to the counter 
  // delete the head 
  // call the function again one the new tree

  let head = BST; // the entire tree
  let count = num;

  if(head.right && head.left) {
    console.log('removing both');
    console.log('left:', head.left.key);
    console.log('right:', head.right.key);

    head.remove(head.left.key);
    head.remove(head.right.key);
    console.log('BST:', head);

    count++;
    console.log('count:', count);
    
    height(head, count);
  }

  else if (head.right) {
    console.log('removing right');
    console.log('right:', head.right.key);

    BST.remove(head.right.key);
    console.log('BST:', head);

    count++;
    console.log('count:', count);

    height(head, count);
  }

  else if (head.left) {
    console.log('removing left');
    console.log('left:', head.left.key);

    BST.remove(head.left.key);
    console.log('BST:', head);

    count++;
    console.log('count:', count);

    height(head, count);
  }
  else {
    console.log('');
    console.log('head:', head);
    console.log(`There are ${count} levels in this tree.`);
  }
  
  // console.log('node:', node);
  // console.log('count:', count);


  // BST.remove(3);
  // BST.remove(4);

};

// console.log(height(Binary, 0));

height(Binary, 0);