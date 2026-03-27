import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "アノクサ",
	},

	illustrator: "Takeshi Nakamura",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "こそこそおく" },
			cost: ["Psychic"],
			effect: { ja: "" },
		}
	],

	weaknesses: [{"type": "Darkness", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [946],
};

export default card;
