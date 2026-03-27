import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "グライガー",
	},

	illustrator: "Kazumasa Yasukuni",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "どくづき" },
			damage: 10,
			cost: ["Fighting"],
			effect: { ja: "" },
		}
	],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [207],
};

export default card;
