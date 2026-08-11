import { Card } from "models/database/card";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ポリゴンZ",
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		'ja-jp': "不安定な 挙動が 目立つ。 プログラムを アップデートした 技術者の 腕の せいらしい。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "クレイジーコード" },
			effect: {
				'ja-jp': "自分の番に何回でも使える。自分の手札にある特殊エネルギーを1枚、自分のポケモンにつける。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "あばれまわる" },
			damage: 120,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 544196,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ポリゴン２",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "None",
	dexId: [474],
};

export default card;
