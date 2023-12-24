const { NotImplementedError } = require("../extensions/index.js");
const { Node } = require("../extensions/list-tree.js");

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
            if (!node) return new Node(data);

            if (node.data === data) return node;

            if (data < node.data) {
                node.left = addData(node.left, data);
            } else {
                node.right = addData(node.right, data);
            }

            return node;
        };

        this.spine = addData(this.spine, data);
    }

    has(data) {
        const hasData = (node, data) => {
            if (!node) return false;

            if (node.data === data) return true;

            if (data < node.data) return hasData(node.left, data);
            else return hasData(node.right, data);
        };

        return hasData(this.spine, data);
    }

    find(data) {
        const findData = (node, data) => {
            if (!node) return null;

            if (node.data === data) return node;

            if (data < node.data) return findData(node.left, data);
            else return findData(node.right, data);

        };

        return findData(this.spine, data);
    }

    remove(data) {
        const removeNode = (node, data) => {
            if (!node) return null;

            if (node.data > data) {
                node.left = removeNode(node.left, data);
                return node;
            } else if (node.data < data) {
                node.right = removeNode(node.right, data);
                return node;
            } else {
                if (!node.left && !node.right) {
                    return null;
                }

                if (!node.left) {
                    node = node.right;
                    return node;
                }

                if (!node.right) {
                    node = node.left;
                    return node;
                }

                let minFromRight = node.right;
                while (minFromRight.left) {
                    minFromRight = minFromRight.left;
                }
                node.data = minFromRight.data;
                node.right = removeNode(node.right, minFromRight.data);

                return node;
            }
        };

        this.spine = removeNode(this.spine, data);
    }

    min() {
        if (!this.spine) return null;
        let node = this.spine;

        while (node.left) {
            node = node.left;
        }

        return node.data;
    }

    max() {
        if (!this.spine) return null;
        let node = this.spine;

        while (node.right) {
            node = node.right;
        }

        return node.data;
    }
}

module.exports = {
    BinarySearchTree,
};
