import { Card } from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
	set: Set,
	name: {
		ja: "カブトップス",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [141],
	hp: 90,
	types: ["Water"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "スラッシュ",
			},
			damage: 20,
		},
		{
			cost: ["Fighting"],
			name: {
				ja: "ハイドカッター",
			},
			effect: {
				ja: "Kabutopsに取り付けられたエネルギーカードの数に等しい多数のコインをひっくり返します。この攻撃は、ヘッド数の40回のダメージ倍になります。この方法で3つ以上のコインをひっくり返すことはできません。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
