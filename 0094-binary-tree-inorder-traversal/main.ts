import {
	deserializeBinaryTree,
	type TreeNode,
	type SerializedTree 
} from "../utils/binary-tree";

function traverse(node: TreeNode | null, result: number[] = []) {
	if (node === null) return result;

	traverse(node.left, result);
	result.push(node.val);
	traverse(node.right, result);

	return result;
}

function inorderTraversal(root: TreeNode | null): number[] {
	return traverse(root, []);
};

const testCases: [SerializedTree, number[]][] = [
	[[1, null, 2, 3], [1, 3, 2]],
	[[], []],
	[[1], [1]],
];

testCases.forEach((testCase, index) => {
	const [input, expected] = testCase;
	const tree = deserializeBinaryTree(input);
	const result = inorderTraversal(tree);
	console.log({ result, expected, index });
});

