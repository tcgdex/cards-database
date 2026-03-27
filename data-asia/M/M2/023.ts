import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ウリムー",
	},

	illustrator: "imoniii",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "とびげり" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "こごえるゆき" },
			damage: 20,
			cost: ["Water", "Colorless"],
		}
	],

	weaknesses: [{"type": "Metal", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [220],
};

export default card;
