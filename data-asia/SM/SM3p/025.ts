import { Card } from "../../../interfaces";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		ja: "パルキア",
	},

	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		ja: "並行して 並ぶ 空間の 狭間に 住むと 言われている。 神話に 登場する ポケモン。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "スパイラルドレイン" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このポケモンのHPを「30」回復する。",
			},
		},
		{
			name: { ja: "アクアブレード" },
			damage: 100,
			cost: ["Water", "Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560183,
			},
		},
	],

	retreat: 2,
	rarity: "Rare",
	dexId: [484],
};

export default card;
