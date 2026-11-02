import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "シャクヤ",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		ja: "自分のサイドを3枚まで選び、手札に加える。その後、手札から、加えた枚数ぶんのカードを選び、ウラにしてサイドとして置く。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560990,
				tcgplayer: 569318,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "Hyper rare",
};

export default card;
