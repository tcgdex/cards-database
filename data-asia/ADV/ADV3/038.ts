import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
	set: Set,
	name: {
		ja: "ドラゴナイトex",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [149],
	hp: 150,
	types: ["Colorless"],
	stage: "Stage2",

	abilities: [
		{
			name: {
				ja: "権力を呼びます",
			},
			effect: {
				ja: "ターン中に好きなように、ポカンの1つに取り付けられたエネルギーカードをドラゴナイトexに移動することができます。ドラゴナイトEXが特別な状態の影響を受ける場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Water", "Lightning"],
			name: {
				ja: "ドラゴンウェーブ",
			},
			effect: {
				ja: "Dragonite Exに取り付けられた水エネルギーカードと稲妻エネルギーカードを捨てます。",
			},
			damage: 70,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			name: {
				ja: "巨大な尾",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
			},
			damage: 120,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
