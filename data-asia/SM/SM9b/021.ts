import { Card } from "../../../interfaces";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		ja: "サンド",
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "雨の 少ない 土地に 棲んでいる。 危険が 迫ると 身体を 丸め 柔らかい お腹を 守るぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "もってくる" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を1枚引く。",
			},
		},
		{
			name: { ja: "ころがりタックル" },
			damage: 30,
			cost: ["Fighting", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558139,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [27],
};

export default card;
