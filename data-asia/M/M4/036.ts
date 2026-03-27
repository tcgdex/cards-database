import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ニャスパー",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "バディアタック" },
			damage: "10+",
			cost: ["Psychic"],
			effect: {
				ja: "この番、自分の手札からマチエールが使われているなら、このワザのダメージは「60」多くなる。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [677],
};

export default card;
