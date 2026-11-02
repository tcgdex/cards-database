import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "パルキア",
	},

	illustrator: "Ryo Ueda",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: { ja: "リコンストラクション" },
			effect: {
				ja: "自分の番に1回使える。自分のベンチポケモン1匹を、相手プレイヤーが選び、相手のベンチポケモン1匹を、自分が選ぶ。その後、選ばれたポケモンを、それぞれ、バトルポケモンと入れ替える（ベンチポケモンがいないプレイヤーは、入れ替えをしない）。このパワーは、このポケモンが特殊状態なら使えない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ハイドロリフレクト" },
			damage: 60,
			cost: ["Water", "Water", "Water"],
			effect: {
				ja: "のぞむなら、自分のエネルギーをすべて、自分のベンチポケモンに好きなようにつけ替えてよい。（自分のベンチポケモンがいないなら、この効果はなくなる。）",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908325,
			},
		},
	],

	retreat: 3,
	rarity: "Classic Collection",
	dexId: [484],
};

export default card;
