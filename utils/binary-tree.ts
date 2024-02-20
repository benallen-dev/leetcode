export type SerializedTree = (number | null)[];

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

export function serializeBinaryTree(tree: TreeNode | null): SerializedTree {

	const q = [tree];
	let result: SerializedTree = [];

	while(q.length) {
		const node = q.shift();
		if (!node) {
			continue;
		}

		result.push(node.val);
		if (!node.left && !node.right) {
			continue;
		}

		if (node.left) {
			q.push(node.left);
		} else {
			result.push(null);
		}

		if (node.right) {
			q.push(node.right);
		} else {
			result.push(null);
		}
	};

	return result;

}

export function deserializeBinaryTree(data: SerializedTree): TreeNode | null {
  if (data.length === 0) return null;

  const root = new TreeNode(data.shift() as number);
  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const current = queue.shift() as TreeNode;
    const leftVal = data.shift();
    const rightVal = data.shift();

    if (leftVal !== null && leftVal !== undefined) {
      current.left = new TreeNode(leftVal);
      queue.push(current.left);
    }

    if (rightVal !== null && rightVal !== undefined) {
      current.right = new TreeNode(rightVal);
      queue.push(current.right);
    }
  }

  return root;
}
