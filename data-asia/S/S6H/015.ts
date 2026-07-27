import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒバニー",
		'zh-tw': "炎兔兒",
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		ja: "戦う 準備が 整うと 鼻の 頭と 足の 裏の 肉球が 高熱を 発する。",
		'zh-tw': "一旦做好了戰鬥的準備，牠鼻頭上和腳底的肉球就會散發出極度的高溫。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ずつき",
				'zh-tw': "敲擊",
			},
			damage: 20,
			cost: ["Fire"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560431,
				tcgplayer: 569147,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [813],
};

export default card;
