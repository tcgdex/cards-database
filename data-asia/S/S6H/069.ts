import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "頂への雪道",
		'zh-tw': "通頂雪道",
	},

	illustrator: "Oswaldo KATO",
	category: "Trainer",

	effect: {
		ja: "おたがいの場の「ルールを持つポケモン」の特性は、すべてなくなる。",
		'zh-tw': "雙方場上的「擁有規則的寶可夢」的特性全部消除。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560491,
				tcgplayer: 569201,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "E",
	rarity: "Uncommon",
};

export default card;
