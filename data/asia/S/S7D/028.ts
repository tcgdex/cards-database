import { Card } from "models/database/card";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "グレッグル",
		'zh-tw': "不良蛙",
	},

	illustrator: "Nagomi Nijo",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		'ja-jp': "毒を 薄めると 薬に なる。 薬品会社の マスコットに なって 人気者に なった。",
		'zh-tw': "毒素在稀釋後能製成藥品。牠是製藥公司的吉祥物，廣受眾人的歡迎。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "どつく",
				'zh-tw': "推擊",
			},
			damage: 20,
			cost: ["Darkness"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571611,
				tcgplayer: 569351,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [453],
};

export default card;
