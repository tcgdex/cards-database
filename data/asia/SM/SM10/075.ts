import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "ポリゴンZ",
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		ja: "不安定な 挙動が 目立つ。 プログラムを アップデートした 技術者の 腕の せいらしい。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "クレイジーコード" },
			effect: {
				ja: "自分の番に何回でも使える。自分の手札にある特殊エネルギーを1枚、自分のポケモンにつける。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "あばれまわる" },
			damage: 120,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557433,
			},
		},
	],

	evolveFrom: {
		ja: "ポリゴン２",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [474],
};

export default card;
