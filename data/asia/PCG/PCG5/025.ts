import { Card } from "models/database/card"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ウェイルマー",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [320],
	hp: 80,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "ダブルタックル",
			},
			effect: {
				'ja-jp': "防御する各ポケモンに20のダメージを与えます。",
			},
		},
		{
			cost: ["Water", "Water", "Colorless"],
			name: {
				'ja-jp': "渦",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合は、防御ポケモンに取り付けられたエネルギーカードを捨てます。",
			},
			damage: 30,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
