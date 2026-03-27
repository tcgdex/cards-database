import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ミミロル",
	},

	illustrator: "tono",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "もてあそぶ" },
			cost: ["Colorless"],
			effect: { ja: "" },
		},
		{
			name: { ja: "キック" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		}
	],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [427],
};

export default card;
