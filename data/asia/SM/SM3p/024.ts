import { Card } from "models/database/card";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "フローゼル",
	},

	illustrator: "Suwama Chiaki",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		'ja-jp': "発達した 浮き袋で 浮かぶ。 おぼれた 人を 救助する 手伝いを している ポケモンだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ひれカッター" },
			damage: 20,
			cost: ["Colorless"],
		},
		{
			name: { ja: "アクアボム" },
			damage: 120,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンにも30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560182,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ブイゼル",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [419],
};

export default card;
