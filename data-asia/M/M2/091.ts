import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "プクリン",
	},

	illustrator: "REND",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	evolveFrom: {
		ja: "プリン",
	},

	attacks: [
		{
			name: { ja: "ラウンド" },
			damage: 40,
			cost: ["Colorless", "Colorless"],
			effect: { ja: "" },
		},
		{
			name: { ja: "ちきゅうなげ" },
			damage: 100,
			cost: ["Colorless", "Colorless", "Colorless"],
		}
	],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [40],
};

export default card;
