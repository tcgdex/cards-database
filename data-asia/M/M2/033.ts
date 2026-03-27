import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "パモット",
	},

	illustrator: "Taiga Kayama",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	evolveFrom: {
		ja: "パモ",
	},

	attacks: [
		{
			name: { ja: "でんきパンチ" },
			damage: 60,
			cost: ["Lightning", "Lightning"],
		}
	],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [922],
};

export default card;
