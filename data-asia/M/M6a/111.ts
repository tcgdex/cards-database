import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "フワンテ",
	},

	illustrator: "Whisker",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "まいあがる" },
			damage: 20,
			cost: ["Psychic"],
			effect: {
				ja: "のぞむなら、このポケモンと、ついているすべてのカードを、山札にもどして切る。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908289,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Illustration rare",
	dexId: [425],
};

export default card;
