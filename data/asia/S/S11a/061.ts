import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ポケモンいれかえ",
		'zh-tw': "寶可夢交替",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		ja: "自分のバトルポケモンをベンチポケモンと入れ替える。",
		'zh-tw': "將自己的戰鬥寶可夢與備戰寶可夢互換。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 673059,
				tcgplayer: 570824,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 570906,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "F",
	rarity: "Uncommon",
};

export default card;
