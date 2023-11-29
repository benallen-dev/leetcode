/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

type TreeNode = {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
}

function recurse(node: TreeNode | null, depth: number): number {
	if (node === null) return depth;

	const leftDepth = recurse(node.left, depth + 1);
	const rightDepth = recurse(node.right, depth + 1);

	return Math.max(leftDepth, rightDepth);
}

function maxDepth(root: TreeNode | null): number {
	return recurse(root, 0);
};

const tree1 = {
	val: 3,
	left: {
		val: 9,
		left: null,
		right: null,
	},
	right: {
		val: 20,
		left: {
			val: 15,
			left: null,
			right: null,
		},
		right: {
			val: 7,
			left: null,
			right: null,
		},
	},
};

const tree2 = {
	val: 1,
	left: null,
	right: {
		val: 2,
		left: null,
		right: null,
	},
};

const tree3: SerialisedTree = [];

const expected1 = 3;
const expected2 = 2;
const expected3 = 0;

const result1 = maxDepth(tree1);
const result2 = maxDepth(tree2);
const result3 = maxDepth(tree3);

console.log({ result1, expected1 });
console.log({ result2, expected2 });
console.log({ result3, expected3 });

