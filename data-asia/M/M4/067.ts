import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ケンタロス",
	},

	illustrator: "Katsunori Sato",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ちからずく" },
			damage: 50,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "タックル" },
			damage: 80,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [128],
};

export default card;
