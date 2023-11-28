/**
  * So basically, this is a binary search problem.
  *
  * The idea is to find the middle of the array, and then check if the target is greater than or less than the middle.
  * If it's greater than the middle, then we know that the target is in the right half of the array.
  * If it's less than the middle, then we know that the target is in the left half of the array.
  * We keep doing this until we find the target, or until we can't divide the array anymore.
  * If we can't divide the array anymore, then we know that the target is not in the array
  */

function searchInsert(nums: number[], target: number): number {

	let lo = 0;
	let hi = nums.length;

	do {
		const m = Math.floor(lo + (hi - lo) / 2);
		const v = nums[m];

		if (v === target) {
			return m;
		} else if (v < target) {
			lo = m + 1;
		} else {
			hi = m;
		}
	} while ( lo < hi )

	return lo
};

// test cases
const nums = [1,3,5,6];

console.log("2 - expect 1: ", searchInsert(nums, 2));
console.log("5 - expect 2: ", searchInsert(nums, 5));
console.log("7 - expect 4: ", searchInsert(nums, 7));
