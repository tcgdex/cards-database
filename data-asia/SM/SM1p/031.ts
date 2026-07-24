import { Card } from "../../../interfaces";
import Set from "../SM1p";

const card: Card = {
	set: Set,
	name: {
		ja: "ドロバンコ",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "足に まとわりついた 泥が グリップに なり 力強い 走りを 実現しているのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "にどげり" },
			damage: "30×",
			cost: ["Fighting", "Fighting"],
			effect: {
				ja: "コインを2回投げ、オモテの数x30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561559,
			},
		},
	],

	retreat: 2,
	rarity: "None",
	dexId: [749],
};

export default card;
