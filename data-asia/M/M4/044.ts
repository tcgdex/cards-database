import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴマゾウ",
	},

	illustrator: "Akino Fukuji",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "どろかけ" },
			damage: 10,
			cost: ["Fighting"],
		},
		{
			name: { ja: "ころがる" },
			damage: 40,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [231],
};

export default card;
