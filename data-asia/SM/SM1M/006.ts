import { Card } from "../../../interfaces";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		ja: "ラランテスGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Grass"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "フラワーサプライ" },
			damage: 40,
			cost: ["Grass"],
			effect: {
				ja: "自分のトラッシュにある基本エネルギーを2枚、自分のポケモンに好きなようにつける。",
			},
		},
		{
			name: { ja: "ソーラーブレード" },
			damage: 120,
			cost: ["Grass", "Grass", "Colorless"],
			effect: {
				ja: "このポケモンのHPを「30」回復する。",
			},
		},
		{
			name: { ja: "クロロサイズGX" },
			damage: "50×",
			cost: ["Grass"],
			effect: {
				ja: "このポケモンについている[草]エネルギーの数x50ダメージ。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561607,
			},
		},
	],

	evolveFrom: {
		ja: "カリキリ",
	},

	retreat: 2,
	rarity: "Double rare",
	dexId: [754],

	suffix: "GX",
};

export default card;
