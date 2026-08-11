import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ルカリオex",
	},

	illustrator: "PLANETA Igarashi",
	category: "Pokemon",
	hp: 250,
	types: ["Fighting"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "けたぐり" },
			damage: 50,
			cost: ["Fighting", "Colorless"],
		},
		{
			name: { ja: "はどうナックル" },
			damage: 120,
			cost: ["Fighting", "Fighting", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863682,
			},
		},
	],

	evolveFrom: {
		ja: "リオル",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [448],

	suffix: "EX",
};

export default card;
