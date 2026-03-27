import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ゼルネアス",
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ジオストーム" },
			damage: "30x",
			cost: ["Psychic", "Psychic", "Psychic"],
			effect: {
				ja: "このワザのダメージは、自分のポケモン全員についているサイコエネルギーの合計数×30。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [{ type: "holo" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	retreat: 2,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [716],
};

export default card;
