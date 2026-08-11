import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ケロマツ",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		ja: "繊細な 泡で 体を 包み 肌を 守る。 のんきに 見せかけて 抜け目なく 周囲を うかがう。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ケロムース" },
			effect: {
				ja: "このポケモンに[水]エネルギーがついているなら、このポケモンのにげるためのエネルギーは、すべてなくなる。",
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
			type: "holo",
			thirdParty: {
				cardmarket: 551351,
			},
		},
	],

	retreat: 1,
	rarity: "Ultra Rare",
	dexId: [656],
};

export default card;
