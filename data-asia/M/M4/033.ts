import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "デオキシス",
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "サイコプロテクト" },
			damage: 80,
			cost: ["Psychic", "Psychic", "Colorless"],
			effect: {
				ja: "次の相手の番、特性を持つ相手のポケモンのワザのダメージを受けない。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	retreat: 3,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [386],
};

export default card;
