import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,

	name: {
		ja: "メガゲッコウガex",
	},

	illustrator: "Susumu Maeya",
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
			name: {
				ja: "ひっさつしゅりけん",
			},
			effect: {
				ja: "このポケモンがバトル場にいて、自分の番に、自分の手札から「基本エネルギー」を1枚トラッシュするなら、1回使える。相手のポケモン1匹に、ダメカンを6個のせる。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ニンジャスピナー",
			},
			damage: "120+",
			cost: ["Water", "Water"],
			effect: {
				ja: "のぞむなら、このポケモンについているエネルギーを1個手札にもどし、80ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],
	variants: [{ type: "holo" }],
	retreat: 1,
	regulationMark: "I",
	rarity: "Special illustration rare",
	dexId: [658],
	suffix: "EX",

	thirdParty: {
		cardmarket: 876921
	}
};

export default card;
