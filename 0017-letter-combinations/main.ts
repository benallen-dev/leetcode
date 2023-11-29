// https://leetcode.com/problems/letter-combinations-of-a-phone-number/?envType=study-plan-v2&envId=top-100-liked

const letterMap = {
	"2": ["a", "b", "c"],
	"3": ["d", "e", "f"],
	"4": ["g", "h", "i"],
	"5": ["j", "k", "l"],
	"6": ["m", "n", "o"],
	"7": ["p", "q", "r", "s"],
	"8": ["t", "u", "v"],
	"9": ["w", "x", "y", "z"]
}

function letterCombinations(digits: string): string[] {
	let permutations: string[] = digits.length ? letterMap[digits[0]] : [];

	for(let i = 1; i < digits.length; ++i) {
		const newLetters = letterMap[digits[i]];

		permutations = permutations.flatMap(permutation => newLetters.map((newLetter: string) => `${permutation}${newLetter}`));
	}

	// for(const digit of digits) {
	// 	const newLetters = letterMap[digit];
		
	// 	// kinda sucks I think because we have a check every loop
	// 	if (!permutations.length) {
	// 		permutations = newLetters;
	// 	} else {
	// 		permutations = permutations.flatMap(x => newLetters.map((newLetter: string) => `${x}${newLetter}`));
	// 	}
	// }

	return permutations;
};

console.log(letterCombinations("23")); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations("")); // []
console.log(letterCombinations("2")); // ["a","b","c"]

