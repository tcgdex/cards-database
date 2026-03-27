import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "モンメン",
	},

	illustrator: "Kariya",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "あつめる" },
			cost: ["Colorless"],
			effect: { ja: "" },
		}
	],

	weaknesses: [{"type": "Metal", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [546],
};

export default card;
