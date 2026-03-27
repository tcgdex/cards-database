import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ヌメルゴン",
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 150,
	types: ["Dragon"],

	description: {
		ja: "",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ドラゴンブレス" },
			damage: 80,
			cost: ["Water", "Psychic", "Colorless"],
		},
		{
			name: { ja: "りゅうのはどう" },
			damage: 150,
			cost: ["Water", "Water", "Psychic", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザを使えない。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	evolveFrom: {
		ja: "ヌメイル",
	},

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	retreat: 3,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [706],
};

export default card;
