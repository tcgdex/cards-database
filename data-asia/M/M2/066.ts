import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "エイパム",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "おどろかす" },
			cost: ["Colorless", "Colorless"],
			effect: { ja: "" },
		}
	],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [190],
};

export default card;
