import { Card } from "models/database/card";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ケロマツ",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		'ja-jp': "繊細な 泡で 体を 包み 肌を 守る。 のんきに 見せかけて 抜け目なく 周囲を うかがう。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ケロムース" },
			effect: {
				'ja-jp': "このポケモンに[水]エネルギーがついているなら、このポケモンのにげるためのエネルギーは、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "はねまわる" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 550641,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [656],
};

export default card;
