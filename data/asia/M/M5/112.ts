import { Card } from "models/database/card";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "メガゼラオラex",
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 270,
	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "サンダーフィスト" },
			damage: "60×",
			cost: ["Lightning"],
			effect: {
				'ja-jp': "このポケモンについている[L]エネルギーの数×60ダメージ。",
			},
		},
		{
			name: { ja: "ゼプトターン" },
			damage: 150,
			cost: ["Lightning", "Lightning", "Lightning"],
			effect: {
				'ja-jp': "このポケモンをベンチポケモンと入れ替える。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 888657,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Special illustration rare",
	dexId: [807],

	suffix: "EX",
};

export default card;
