import { Card } from "models/database/card";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "モグリュー",
	},

	illustrator: "Suwama Chiaki",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'ja-jp': "両手の ツメを 重ね合わせて 体を 高速 回転させると 猛スピードで 地中を 進む。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "たがやす" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分のトラッシュにある好きなカードを1枚、相手に見せてから、山札にもどして切る。",
			},
		},
		{
			name: { ja: "どろかけ" },
			damage: 10,
			cost: ["Fighting"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 555198,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [529],
};

export default card;
