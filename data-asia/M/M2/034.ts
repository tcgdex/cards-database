import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "パーモット",
	},

	illustrator: "satoma",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "",
	},

	stage: "Stage2",

	evolveFrom: {
		ja: "パモット",
	},

	attacks: [
		{
			name: { ja: "ボルテージフィスト" },
			damage: 130,
			cost: ["Lightning", "Lightning"],
			effect: { ja: "" },
		}
	],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Rare Holo",
	dexId: [923],
};

export default card;
