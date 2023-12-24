const { NotImplementedError } = require("../extensions/index.js");
const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {
    constructor() {
        this.spine = null;
    }
    root() {
        return this.spine;
    }

    add(data) {
        const addData = (node, data) => {
            if (!node) {
                return new Node(data);
            }

            if (node.data === data) {
                return node;
            }
            if (data < node.data) {
                node.left = addData(node.left, data);
            } else {
                node.right = addData(node.right, data);
            }

            return node;
        };
        this.spine = addData(this.spine, data);
    }

    has(/* data */) {
        throw new NotImplementedError("Not implemented");
        // remove line with error and write your code here
    }

    find(/* data */) {
        throw new NotImplementedError("Not implemented");
        // remove line with error and write your code here
    }

    remove(/* data */) {
        throw new NotImplementedError("Not implemented");
        // remove line with error and write your code here
    }

    min() {
        throw new NotImplementedError("Not implemented");
        // remove line with error and write your code here
    }

    max() {
        throw new NotImplementedError("Not implemented");
        // remove line with error and write your code here
    }
}

module.exports = {
    BinarySearchTree,
};
