import { Card } from "../../../interfaces";
import Set from "../S8b";

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
				cardmarket: 586683,
				tcgplayer: 571419,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578445,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "E",
	rarity: "None",
};

export default card;
