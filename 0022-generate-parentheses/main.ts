// https://leetcode.com/problems/generate-parentheses/?envType=study-plan-v2&envId=top-100-liked

type ResultNode = {
	open: number;
	closed: number;
	value: string;
}

function generateParenthesis(n: number): string[] {
	let results: ResultNode[] = [{
		open: 0,
		closed: 0,
		value: ""
	}];

	for (let i = 0; i < 2 * n; ++i) {
		const newResults = results.flatMap(result => {

			console.log({ result });

			let foo: ResultNode[] = [];

			if (result.open < n) foo.push({
				open: result.open + 1,
				closed: result.closed,
				value: result.value + "("
			});
			if (result.closed < result.open) foo.push({
				open: result.open,
				closed: result.closed + 1,
				value: result.value + ")"
			});

			return foo;
		});

		results = newResults;
	}

	return results.map(x => x.value);
};

console.log(generateParenthesis(2));

const out = generateParenthesis(4);
const correct = ["(((())))", "((()()))", "((())())", "((()))()", "(()(()))", "(()()())", "(()())()", "(())(())", "(())()()", "()((()))", "()(()())", "()(())()", "()()(())", "()()()()"]

for (let a of correct) {
	if (!out.includes(a)) {
		console.log(a);
	}
}

