import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "メリープ",
	},

	illustrator: "UKUMO uiti",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "でんじは" },
			damage: 20,
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "コインを1回投げ、オモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [179],
};

export default card;
