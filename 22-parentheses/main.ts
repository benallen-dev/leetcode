// https://leetcode.com/problems/generate-parentheses/?envType=study-plan-v2&envId=top-100-liked

const prepend = (x:string) => `()${x}`;
const append = (x: string) => `${x}()`;
const nest = (x: string) => `(${x})`;

function generateParenthesis(n: number): string[] {
	if ( n === 0 ) return [];

	let parens: string[] = ["()"];

	for (let i = 1; i < n; ++i) {
		const foo = parens.flatMap(x => ([
			prepend(x),
			append(x),
			nest(x)
		]));

		parens = Array.from(new Set(foo));
	}

	return parens;

};
// The (())(()) case is missing for n = 4
const out = generateParenthesis(4);
const correct = ["(((())))","((()()))","((())())","((()))()","(()(()))","(()()())","(()())()","(())(())","(())()()","()((()))","()(()())","()(())()","()()(())","()()()()"]

for (let a of correct) {
	if (!out.includes(a)) {
		console.log(a);
	}
}
