import { Card } from "models/database/card";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヒメグマ",
		'zh-tw': "熊寶寶",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'ja-jp': "食べ物が 減る 冬の前に あちこちに 食べ物を 隠す 習性を 持っている。",
		'zh-tw': "有著在食物短缺的冬季來臨之前，將食物藏在各處的習性。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "ひっかく",
				'zh-tw': "抓",
			},
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560471,
				tcgplayer: 569187,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Common",
	dexId: [216],
};

export default card;
