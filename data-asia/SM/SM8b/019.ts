import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "フォッコ",
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "小枝を 持ち歩き おやつがわりに ポリポリ 食べる。 耳から 熱気を 噴き出して 相手を 威嚇する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひだね" },
			damage: 10,
			cost: ["Fire"],
		},
		{
			name: { ja: "うしろげり" },
			damage: 20,
			cost: ["Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 550581,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [653],
};

export default card;
