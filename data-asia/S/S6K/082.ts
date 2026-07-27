import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "シャクヤ",
	},

	illustrator: "kirisAki",
	category: "Trainer",

	effect: {
		ja: "自分のサイドを3枚まで選び、手札に加える。その後、手札から、加えた枚数ぶんのカードを選び、ウラにしてサイドとして置く。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560983,
				tcgplayer: 569310,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "Ultra Rare",
};

export default card;
