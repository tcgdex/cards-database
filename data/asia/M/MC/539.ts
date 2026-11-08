import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "コモルー",
	},

	illustrator: "Julie Hang",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],

	description: {
		'ja-jp': "殻の 中では 爆発的な スピードで 細胞が 変化し 進化の 準備を しているぞ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ガードプレス" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
			},
		},
		{
			name: { ja: "ヘビーインパクト" },
			damage: 80,
			cost: ["Fire", "Water", "Colorless"],
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863841,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "タツベイ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "None",
	dexId: [372],
};

export default card;
