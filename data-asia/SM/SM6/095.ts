import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "ゲッコウガGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 230,
	types: ["Water"],

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ふうましゅりけん" },
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手のポケモン1匹に、ダメカンを3個のせる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "おぼろぎり" },
			damage: 110,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "のぞむなら、このポケモンと、ついているすべてのカードを、自分の山札にもどして切る。",
			},
		},
		{
			name: { ja: "シャドーアサシンGX" },
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "相手のベンチポケモン1匹に、130ダメージ。［ベンチは弱点・抵抗力を計算しない。］［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559640,
			},
		},
	],

	evolveFrom: {
		ja: "ゲコガシラ",
	},

	retreat: 2,
	rarity: "Ultra Rare",
	dexId: [658],

	suffix: "GX",
};

export default card;
