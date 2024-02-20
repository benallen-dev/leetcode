function isValid(s: string): boolean {
	let stack: string[] = [];

	for (let i = 0; i < s.length; ++i) {
		const c = s.charAt(i);

		if (["(","{","["].includes(c)) {
			stack.push(c)
		}

		if (
			(c === ")" && stack.pop() !== "(") ||
			(c === "}" && stack.pop() !== "{") ||
			(c === "]" && stack.pop() !== "[")
		) {
			return false;
		}
	}

	return stack.length === 0;	
}


const testCases: [string, boolean][] = [
	["()", true],
	["()[]{}", true],
	["(]", false],
	["([)]", false],
	["{[]}", true],
	["", true],
	["(", false],
];

testCases.forEach((testCase) => {
	const [input, expected] = testCase;
	const result = isValid(input);
	console.log({ testCase, result, testPassed: result === expected ? "PASS" : "FAIL"});
});

