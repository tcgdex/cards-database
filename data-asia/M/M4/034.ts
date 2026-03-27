import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "デオキシス",
	},

	illustrator: "hncl",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "サイコスピード" },
			damage: 30,
			cost: ["Psychic"],
			effect: {
				ja: "自分の手札が5枚になるようにカードを引く。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	retreat: 0,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [386],
};

export default card;
