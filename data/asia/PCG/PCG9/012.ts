import { Card } from "models/database/card"
import Set from "../PCG9"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "フィーバス（デルタ種）",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [349],
	hp: 30,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fire"],
			name: {
				'ja-jp': "フレイル",
			},
			effect: {
				'ja-jp': "ダメージ数のダメージ数は、Feebasのダメージ数をカウンターします。",
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
