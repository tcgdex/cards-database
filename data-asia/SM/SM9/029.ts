import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "ラプラス",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		ja: "人を 乗せて 泳ぐのが 好き。 アローラ地方 では 大切な 水上の 交通 手段。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "あやしいひかり" },
			cost: ["Water"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
		{
			name: { ja: "ハイドロポンプ" },
			damage: "10+",
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンについている[水]エネルギーの数x30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558307,
			},
		},
	],

	retreat: 3,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [131],
};

export default card;
