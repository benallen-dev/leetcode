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

 type SerialisedTree = (number | null)[];

function maxDepth(root: SerialisedTree | null): number {
    if (root === null) return 0;
    
	
	return -1;
};

const case1: SerialisedTree = [3, 9, 20, null, null, 15, 7];
const case2: SerialisedTree = [1, null, 2];
const case3: SerialisedTree = [];

const expected1 = 3;
const expected2 = 2;
const expected3 = 0;

const result1 = maxDepth(case1);	
const result2 = maxDepth(case2);
const result3 = maxDepth(case3);

console.log({result1, expected1});
console.log({result2, expected2});
console.log({result3, expected3});

