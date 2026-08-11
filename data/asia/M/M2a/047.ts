import { Card } from "models/database/card";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "シビシラス",
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 40,
	types: ["Lightning"],

	description: {
		'ja-jp': "１匹の 電力は 小さいが たくさんの シビシラスが つながると 雷と 同じ 威力になる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "じっとする" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "このポケモンのHPを「10」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861290,
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 861604,
			},
		},
		{
			type: "reverse",
			foil: "quickball",
			thirdParty: {
				cardmarket: 861605,
			},
		},
	],

	retreat: 0,
	regulationMark: "I",
	rarity: "None",
	dexId: [602],
};

export default card;
