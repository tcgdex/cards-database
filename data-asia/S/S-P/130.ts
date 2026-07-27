import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒバニー",
		'zh-tw': "草苗龜",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		ja: "戦う 準備が 整うと 鼻の 頭と 足の 裏の 肉球が 高熱を 発する。",
		'zh-tw': "用全身進行光合作用，製造氧氣。當口渴的時候，頭上的葉子就會枯萎。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ひのこ",
				'zh-tw': "咬住",
			},
			damage: 30,
			cost: ["Fire"],
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525335,
				tcgplayer: 597331,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [813],
};

export default card;
