import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "リザード",
	},

	illustrator: "Uninori",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	evolveFrom: {
		ja: "ヒトカゲ",
	},

	attacks: [
		{
			name: { ja: "ひっかく" },
			damage: 40,
			cost: ["Fire"],
		}
	],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [5],
};

export default card;
