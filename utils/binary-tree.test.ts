import { deserializeBinaryTree, serializeBinaryTree } from './binary-tree';


const foo = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
const deserialized = deserializeBinaryTree(foo);
const serialized = serializeBinaryTree(deserialized);

console.log({ foo, deserialized, serialized });
