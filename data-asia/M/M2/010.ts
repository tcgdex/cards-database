import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "エクスレッグ",
	},

	illustrator: "Taiga Kasai",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	evolveFrom: {
		ja: "マメバッタ",
	},

	attacks: [
		{
			name: { ja: "あしばらい" },
			damage: 30,
			cost: ["Grass"],
		},
		{
			name: { ja: "ジャンプショット" },
			damage: 150,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: { ja: "" },
		}
	],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [920],
};

export default card;
