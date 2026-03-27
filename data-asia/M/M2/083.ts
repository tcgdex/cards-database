import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "カルボウ",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ちからをためる" },
			cost: ["Fire"],
			effect: { ja: "" },
		},
		{
			name: { ja: "チョップ" },
			damage: 10,
			cost: ["Fire"],
		}
	],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [935],
};

export default card;
