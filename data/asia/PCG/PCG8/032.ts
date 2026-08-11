import { Card } from "models/database/card"
import Set from "../PCG8"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カリザード（デルタ種）",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [6],
	hp: 120,
	types: ["Lightning"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "雷の皮",
			},
			effect: {
				'ja-jp': "ターン中に、手からチャリザードをプレイしてポカンの1つを進化させると、デッキのトップ5カードを見て、好きなだけエネルギーカードを選択し、ポケモンの1つに取り付けます。他のカードを破棄します。",
			},
		}],

	attacks: [
		{
			cost: ["Lightning", "Metal", "Metal", "Colorless"],
			name: {
				'ja-jp': "金属燃焼",
			},
			effect: {
				'ja-jp': "Charizardに取り付けられたすべての金属エネルギーを捨てます。",
			},
			damage: 120,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
