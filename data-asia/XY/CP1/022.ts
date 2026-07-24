import { Card } from "../../../interfaces";
import Set from "../CP1";

const card: Card = {
	set: Set,
	name: {
		ja: "マグマ団のザングース",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "恐れ知らずの ザングース達の フォーメーション 攻撃を 見切ることが できるかしら？",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "なかまをよぶ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から「マグマ団」のたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。",
			},
		},
		{
			name: { ja: "チームプレイ" },
			damage: "20×",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "自分のベンチの「マグマ団」のポケモンの数x20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 563742,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [335],
};

export default card;
