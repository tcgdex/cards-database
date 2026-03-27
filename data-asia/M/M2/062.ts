import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ジュラルドン",
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はかいこうせん" },
			damage: 70,
			cost: ["Metal", "Metal", "Metal"],
			effect: { ja: "" },
		}
	],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [884],
};

export default card;
