import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ドーミラー",
	},

	illustrator: "OKUBO",
	category: "Pokemon",
	hp: 80,
	types: ["Metal"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "てっぺき" },
			cost: ["Colorless"],
			effect: { ja: "" },
		},
		{
			name: { ja: "ころがる" },
			damage: 30,
			cost: ["Colorless", "Colorless", "Colorless"],
		}
	],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [436],
};

export default card;
