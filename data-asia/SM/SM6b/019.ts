import { Card } from "../../../interfaces";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		ja: "ハスブレロ",
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		ja: "釣り人を 見つけると 水中から 釣り糸を 引っ張り ジャマして 喜ぶ いたずらもの。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "アクアフロート" },
			effect: {
				ja: "このポケモンに[水]エネルギーがついているなら、このポケモンのにげるためのエネルギーは、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "おそいかかる" },
			damage: "20+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559169,
			},
		},
	],

	evolveFrom: {
		ja: "ハスボー",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [271],
};

export default card;
