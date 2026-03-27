import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "メガゲッコウガex",
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 350,
	types: ["Water"],

	description: {
		ja: "",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ひっさつしゅりけん" },
			effect: {
				ja: "自分の番に1回、このポケモンがバトル場にいるとき使える。自分の手札から基本水エネルギーを1枚トラッシュする。そして相手のポケモンにダメージカウンターを合計6個、好きなように置く。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ニンジャスピナー" },
			damage: "120+",
			cost: ["Water", "Water"],
			effect: {
				ja: "このポケモンについている水エネルギーを1個手札に戻してよい。そうした場合、このワザのダメージは「80」多くなる。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	evolveFrom: {
		ja: "ゲコガシラ",
	},

	variants: [{ type: "holo" }],

	retreat: 1,
	regulationMark: "I",
	rarity: "Double rare",
	dexId: [658],

	suffix: "EX",
};

export default card;
