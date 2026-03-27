import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ズバット",
	},

	illustrator: "Mékayu",
	category: "Pokemon",
	hp: 40,
	types: ["Darkness"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ちょうおんぱ" },
			cost: ["Darkness"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	retreat: 0,
	regulationMark: "I",
	rarity: "Common",
	dexId: [41],
};

export default card;
