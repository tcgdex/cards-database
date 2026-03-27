import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ポッタイシ",
	},

	illustrator: "Atsuya Uki",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	evolveFrom: {
		ja: "ポッチャマ",
	},

	attacks: [
		{
			name: { ja: "つつく" },
			damage: 20,
			cost: ["Colorless"],
		},
		{
			name: { ja: "ダイビング" },
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: { ja: "" },
		}
	],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [394],
};

export default card;
