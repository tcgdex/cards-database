import { Card } from "../../../interfaces";
import Set from "../SM9a";

const card: Card = {
	set: Set,
	name: {
		ja: "ラッタ",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "後ろ足の 小さい 水かきで 海を 泳いで 島を 渡り 敵から 逃げていた という。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "とんずらまえば" },
			damage: 70,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが進化ポケモンなら、このポケモンをベンチポケモンと入れ替える。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558227,
			},
		},
	],

	evolveFrom: {
		ja: "コラッタ",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [20],
};

export default card;
