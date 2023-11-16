// https://leetcode.com/problems/generate-parentheses/?envType=study-plan-v2&envId=top-100-liked

function generateParenthesis(n: number): string[] {
	let results: string[] = [""];

	for (let i = 0; i < 2*n; ++i) {
		const newResults = results.flatMap(result => {
			let open = 0;
			let closed = 0;

			for (const letter of result) {
				if (letter === "(") open++;
				if (letter === ")") closed++;
			}

			let foo:string[] = [];

			if (open < n) foo.push(result + "(");
			if (open > closed) foo.push(result + ")");

			return foo;
		});

		results = newResults;
	}

	return results;
};

console.log(generateParenthesis(2));

const out = generateParenthesis(4);
const correct = ["(((())))", "((()()))", "((())())", "((()))()", "(()(()))", "(()()())", "(()())()", "(())(())", "(())()()", "()((()))", "()(()())", "()(())()", "()()(())", "()()()()"]

for (let a of correct) {
	if (!out.includes(a)) {
		console.log(a);
	}
}

