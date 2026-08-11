import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "ジャラコ",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],

	description: {
		ja: "頭の ウロコで 岩や 地面を バシバシ 叩き 相手を 威嚇。 音で 仲間と 連絡も とる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かじる" },
			damage: 10,
			cost: ["Fighting"],
		},
		{
			name: { ja: "リューズヘッド" },
			damage: 50,
			cost: ["Lightning", "Fighting", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554953,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [782],
};

export default card;
