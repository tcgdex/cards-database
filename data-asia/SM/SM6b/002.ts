import { Card } from "../../../interfaces";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		ja: "ウツドン",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "まず 毒の粉を 吐き 相手の 動きを 止めてしまってから 溶解液で とどめを 刺す。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "せいちょう" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の手札にある[草]エネルギーを2枚まで、このポケモンにつける。",
			},
		},
		{
			name: { ja: "ダブルはっぱカッター" },
			damage: "30×",
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数x30ダメージ。",
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
		ja: "マダツボミ",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [70],
};

export default card;
