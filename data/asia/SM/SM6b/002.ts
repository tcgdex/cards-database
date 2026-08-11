import { Card } from "models/database/card";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ウツドン",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		'ja-jp': "まず 毒の粉を 吐き 相手の 動きを 止めてしまってから 溶解液で とどめを 刺す。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "せいちょう" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の手札にある[草]エネルギーを2枚まで、このポケモンにつける。",
			},
		},
		{
			name: { ja: "ダブルはっぱカッター" },
			damage: "30×",
			cost: ["Grass", "Colorless"],
			effect: {
				'ja-jp': "コインを2回投げ、オモテの数x30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559152,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "マダツボミ",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [70],
};

export default card;
