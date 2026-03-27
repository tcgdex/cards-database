import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "クサイハナ",
	},

	illustrator: "Yoriyuki Ikegami",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	evolveFrom: {
		ja: "ナゾノクサ",
	},

	attacks: [
		{
			name: { ja: "よだれながし" },
			damage: 20,
			cost: ["Grass"],
			effect: { ja: "" },
		}
	],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [44],
};

export default card;
