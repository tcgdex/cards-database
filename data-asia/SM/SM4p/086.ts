import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "シルヴァディGX",
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
				ja: "このポケモンがいるかぎり、自分のたねポケモン全員のにげるためのエネルギーは、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ターボドライブ" },
			damage: 120,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "自分のトラッシュにある基本エネルギーを1枚、ベンチポケモンにつける。",
			},
		},
		{
			name: { ja: "リベリオンGX" },
			damage: "50×",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のベンチポケモンの数x50ダメージ。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560119,
			},
		},
	],

	evolveFrom: {
		ja: "タイプ：ヌル",
	},

	retreat: 2,
	rarity: "Double rare",
	dexId: [773],

	suffix: "GX",
};

export default card;
