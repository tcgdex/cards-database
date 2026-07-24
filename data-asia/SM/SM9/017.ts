import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "ギャロップ",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	description: {
		ja: "速く 動く 物体を 見ると 競争したくなり 猛烈な スピードで 追いかけはじめる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "やきこがす" },
			damage: 20,
			cost: ["Fire"],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。",
			},
		},
		{
			name: { ja: "こうそくいどう" },
			damage: 60,
			cost: ["Fire", "Fire"],
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558295,
			},
		},
	],

	evolveFrom: {
		ja: "ポニータ",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [78],
};

export default card;
