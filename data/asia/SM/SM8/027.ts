import { Card } from "models/database/card";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マンタイン",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		'ja-jp': "悠然と 海を 泳ぐうちに 食べ残しを ねらった テッポウオが ヒレに くっつくが 気にしていない。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "マンタインサーフ" },
			effect: {
				'ja-jp': "このポケモンにエネルギーがついているなら、このポケモンのにげるためのエネルギーは、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "なみのり" },
			damage: 100,
			cost: ["Water", "Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558666,
			},
		},
	],

	retreat: 3,
	rarity: "Common",
	dexId: [226],
};

export default card;
