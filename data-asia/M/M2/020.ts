import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ソウブレイズ",
	},

	illustrator: "Gemi",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	evolveFrom: {
		ja: "カルボウ",
	},

	attacks: [
		{
			name: { ja: "ごくねつぎり" },
			damage: 220,
			cost: ["Fire"],
			effect: { ja: "" },
		}
	],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [937],
};

export default card;
