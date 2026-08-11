import { Card } from "models/database/card"
import Set from "../PCG9"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ニドラン（デルタ種）",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [29],
	hp: 40,
	types: ["Metal"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "テールホイップ",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防衛ポケモンは相手の次のターン中に攻撃することはできません。",
			},
		},
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "傷",
			},
			damage: 10,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};

export default card
