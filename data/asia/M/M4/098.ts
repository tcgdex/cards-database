import { Card } from "models/database/card";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "メガゲッコウガex",
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 350,
	types: ["Water"],

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ひっさつしゅりけん" },
			effect: {
				'ja-jp': "このポケモンがバトル場にいて、自分の番に、自分の手札から「基本[W]エネルギー」を1枚トラッシュするなら、1回使える。相手のポケモン1匹に、ダメカンを6個のせる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ニンジャスピナー" },
			damage: "120+",
			cost: ["Water", "Water"],
			effect: {
				'ja-jp': "のぞむなら、このポケモンについている[W]エネルギーを1個手札にもどし、80ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 877331,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ゲコガシラ",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "Ultra Rare",
	dexId: [658],

	suffix: "EX",
};

export default card;
