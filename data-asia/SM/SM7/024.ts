import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "ラグラージ",
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],

	description: {
		ja: "大型船を 引っ張って 泳ぐ パワーの 持ち主。 太い 腕の 一振りで 相手を たたきのめす。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "パワードロー" },
			effect: {
				ja: "自分の番に1回使える。自分の手札を1枚トラッシュする。その後、山札を3枚引く。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ハイドロポンプ" },
			damage: "80+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについている[水]エネルギーの数x20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558985,
			},
		},
	],

	evolveFrom: {
		ja: "ヌマクロー",
	},

	retreat: 3,
	rarity: "Rare",
	dexId: [260],
};

export default card;
