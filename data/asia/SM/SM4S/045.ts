import { Card } from "models/database/card";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "シルヴァディGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Colorless"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ジャイロユニット" },
			effect: {
				'ja-jp': "このポケモンがいるかぎり、自分のたねポケモン全員のにげるためのエネルギーは、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ターボドライブ" },
			damage: 120,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "自分のトラッシュにある基本エネルギーを1枚、ベンチポケモンにつける。",
			},
		},
		{
			name: { ja: "リベリオンGX" },
			damage: "50×",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のベンチポケモンの数x50ダメージ。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560357,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "タイプ：ヌル",
	},

	retreat: 2,
	rarity: "Double rare",
	dexId: [773],

	suffix: "GX",
};

export default card;
