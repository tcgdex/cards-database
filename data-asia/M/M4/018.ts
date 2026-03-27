import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "デリバード",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ハッピープレゼント" },
			cost: ["Colorless"],
			effect: {
				ja: "おたがいのプレイヤーは、それぞれ手札から基本エネルギーを3枚まで選び、自分のポケモンに好きなようにつけてよい。",
			},
		},
		{
			name: { ja: "はばたく" },
			damage: 40,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [225],
};

export default card;
