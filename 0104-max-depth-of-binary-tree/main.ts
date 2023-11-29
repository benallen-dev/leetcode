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
import deserialiseTree from '../utils/binary-tree';

function recurse(node: TreeNode | null, depth: number): number {
	if (node === null) return depth;

	const leftDepth = recurse(node.left, depth + 1);
	const rightDepth = recurse(node.right, depth + 1);

	return Math.max(leftDepth, rightDepth);
}

function maxDepth(root: TreeNode | null): number {
	return recurse(root, 0);
};

const case1 = [3, 9, 20, null, null, 15, 7];
const case2 = [1, null, 2];
const case3 = [];

const tree1 = deserialiseTree(case1);
const tree2 = deserialiseTree(case2);
const tree3 = deserialiseTree(case3);

const expected1 = 3;
const expected2 = 2;
const expected3 = 0;

const result1 = maxDepth(tree1);
const result2 = maxDepth(tree2);
const result3 = maxDepth(tree3);

console.log({ result1, expected1 });
console.log({ result2, expected2 });
console.log({ result3, expected3 });

