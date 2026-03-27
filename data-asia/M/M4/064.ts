import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ヌメラ",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 60,
	types: ["Dragon"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "すいとる" },
			damage: 30,
			cost: ["Water", "Psychic"],
			effect: {
				ja: "このポケモンのダメージカウンターを3個取り除く。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [704],
};

export default card;
