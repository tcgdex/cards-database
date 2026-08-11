import { Card } from "models/database/card";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "フォッコ",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		'ja-jp': "小枝を 持ち歩き おやつがわりに ポリポリ 食べる。 耳から 熱気を 噴き出して 相手を 威嚇する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひのこ" },
			damage: 30,
			cost: ["Fire"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559556,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [653],
};

export default card;
