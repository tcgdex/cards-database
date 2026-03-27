import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "エルフーン",
	},

	illustrator: "Yuka Tanaka",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	evolveFrom: {
		ja: "モンメン",
	},

	attacks: [
		{
			name: { ja: "いやしのわた" },
			cost: ["Colorless"],
			effect: { ja: "" },
		},
		{
			name: { ja: "とんぼがえり" },
			damage: 50,
			cost: ["Psychic"],
			effect: { ja: "" },
		}
	],

	weaknesses: [{"type": "Metal", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [547],
};

export default card;
