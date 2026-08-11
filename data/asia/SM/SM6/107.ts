import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "ウルトラネクロズマGX",
	},

	illustrator: "Yoshinobu Saito",
	category: "Pokemon",
	hp: 190,
	types: ["Dragon"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "フォトンゲイザー" },
			damage: "20+",
			cost: ["Psychic", "Metal"],
			effect: {
				ja: "このポケモンについている基本[超]エネルギーをすべてトラッシュし、その枚数x80ダメージ追加。",
			},
		},
		{
			name: { ja: "めつぼうのひかりGX" },
			cost: ["Psychic", "Metal"],
			effect: {
				ja: "このワザは、おたがいのサイドの残り枚数の合計が、6枚以下のときにしか使えない。相手のポケモン全員に、それぞれダメカンを6個のせる。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559652,
			},
		},
	],

	retreat: 2,
	rarity: "Hyper rare",
	dexId: [800],

	suffix: "GX",
};

export default card;
