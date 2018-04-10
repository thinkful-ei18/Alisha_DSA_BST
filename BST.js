'use strict';
/*
Create a Binary Search Tree called BST and insert 3,1,4,6,9,2,5,7 to your tree. Compare your result with the result from the first exercise
*/

const BinarySearchTree = require('./BinarySearchTree');
const util = require('util');



const BST = () => {
  const Binary = new BinarySearchTree();

  Binary.insert(3, null);
  Binary.insert(1, null);
  Binary.insert(4, null);
  Binary.insert(6, null);
  Binary.insert(9, null);
  Binary.insert(2, null);
  Binary.insert(5, null);
  Binary.insert(7, null);

  console.log(util.inspect(Binary, false, null));

  // return Binary;

};

BST();


/*
BinarySearchTree {
  key: 3,  
  value: null,
  parent: null,
  left:
      BinarySearchTree {
        key: 1,
        value: null,     
        parent: [Circular],
        left: null,
        right:
            BinarySearchTree {
              key: 2,
              value: null,
              parent: [Circular],
              left: null,
              right: null } },
  right:
      BinarySearchTree {
        key: 4,
        value: null,
        parent: [Circular],
        left: null,
        right:
            BinarySearchTree {
              key: 6,        
              value: null,
              parent: [Circular],
              left:
                  BinarySearchTree {
                    key: 5,
                    value: null,
                    parent: [Circular],
                    left: null,
                    right: null },
              right:
                  BinarySearchTree {
                    key: 9,
                    value: null,
                    parent: [Circular],
                    left:
                        BinarySearchTree {
                          key: 7,
                          value: null,
                          parent: [Circular],
                          left: null,
                          right: null },
                    right: null } } } }
*/
