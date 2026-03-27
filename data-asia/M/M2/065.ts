import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "プクリン",
	},

	illustrator: "En Morikura",
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

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [40],
};

export default card;
