import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "スイクン",
	},

	illustrator: "Takeshia Nakamura",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "クリスタルフォール" },
			damage: 30,
			cost: ["Water", "Water"],
			effect: { ja: "" },
		}
	],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Rare Holo",
	dexId: [245],
};

export default card;
