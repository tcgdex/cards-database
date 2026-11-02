import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "シトロンの機転",
		'zh-tw': "希特隆的機智",
		'zh-cn': "希特隆的機智",
	},

	illustrator: "Naoki Saito",
	category: "Trainer",

	effect: {
		ja: "自分の[L]ポケモン全員のHPを、それぞれ「60」回復する。",
		'zh-tw': "將自己的所有【雷】寶可夢各恢復「60」HP。",
		'zh-cn': "將自己的所有【雷】寶可夢各恢復「60」HP。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 793537,
				tcgplayer: 587683,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "Uncommon",
};

export default card;
