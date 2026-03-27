import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "パモ",
	},

	illustrator: "Shimeris Yukichi",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "なきごえ" },
			cost: ["Lightning"],
			effect: { ja: "" },
		},
		{
			name: { ja: "ちいさなでんき" },
			damage: 10,
			cost: ["Lightning"],
		}
	],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [921],
};

export default card;
