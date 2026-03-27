import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "トゲデマル",
	},

	illustrator: "Orca",
	category: "Pokemon",
	hp: 80,
	types: ["Metal"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "なかまをさがす" },
			cost: ["Colorless"],
			effect: { ja: "" },
		},
		{
			name: { ja: "かじりつく" },
			damage: 30,
			cost: ["Metal"],
		}
	],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [777],
};

export default card;
