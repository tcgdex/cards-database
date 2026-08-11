import { Card } from "models/database/card"
import Set from "../PCG7"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ピカチュウ（デルタ種）",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [25],
	hp: 50,
	types: ["Metal"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "尾のwhap",
			},
			damage: 10,
		},
		{
			cost: ["Metal", "Colorless", "Colorless"],
			name: {
				'ja-jp': "スチールヘッドバット",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、この攻撃は30ダメージに加えて10ダメージを与えます。",
			},
		},
	],

	retreat: 1,

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
