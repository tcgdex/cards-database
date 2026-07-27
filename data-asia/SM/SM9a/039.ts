import { Card } from "../../../interfaces";
import Set from "../SM9a";

const card: Card = {
	set: Set,
	name: {
		ja: "コラッタ",
	},

	illustrator: "Eri Yamaki",
	category: "Pokemon",
	hp: 30,
	types: ["Colorless"],

	description: {
		ja: "一生 前歯が 伸び続ける。 あまりに 伸びすぎると エサが 食べられなくなって 餓死 する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かじる" },
			damage: 30,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558226,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [19],
};

export default card;
