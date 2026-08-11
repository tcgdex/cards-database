import { Card } from "models/database/card";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "イワーク",
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		'ja-jp': "地中を ものすごい 勢いで 掘りすすみ エサを 探す。 通った 跡は ディグダの 住処になる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "がんばんプレス" },
			damage: 20,
			cost: ["Fighting"],
			effect: {
				'ja-jp': "次の相手の番、このポケモンが受けるワザのダメージは「-20」される。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557005,
			},
		},
	],

	retreat: 4,
	regulationMark: "C",
	rarity: "Common",
	dexId: [95],
};

export default card;
