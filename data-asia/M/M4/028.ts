import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "モココ",
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "でんじしょうがい" },
			damage: 40,
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "次の相手の番、相手は手札からグッズを使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	evolveFrom: {
		ja: "メリープ",
	},

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [180],
};

export default card;
