import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ドータクン",
	},

	illustrator: "Masako Tomii",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	evolveFrom: {
		ja: "ドーミラー",
	},

	attacks: [
		{
			name: { ja: "トリプルドロー" },
			cost: ["Colorless"],
			effect: { ja: "" },
		},
		{
			name: { ja: "ツールドロップ" },
			damage: 40,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: { ja: "" },
		}
	],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 3,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [437],
};

export default card;
