import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "タンドン",
	},

	illustrator: "Kurata So",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "古くなり 剥がれ落ちた 体の 表面は 石炭の 代わりに 燃料として 使われてきた。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "どろかけ" },
			damage: 20,
			cost: ["Fighting"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861338,
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 861680,
			},
		},
		{
			type: "reverse",
			foil: "duskball",
			thirdParty: {
				cardmarket: 861681,
			},
		},
	],

	retreat: 3,
	regulationMark: "I",
	rarity: "None",
	dexId: [837],
};

export default card;
