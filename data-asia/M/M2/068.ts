import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ドーブル",
	},

	illustrator: "REND",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "エネルギースケッチ" },
			cost: ["Colorless"],
			effect: { ja: "" },
		},
		{
			name: { ja: "フック" },
			damage: 40,
			cost: ["Colorless", "Colorless"],
		}
	],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [235],
};

export default card;
