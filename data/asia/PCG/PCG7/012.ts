import { Card } from "models/database/card"
import Set from "../PCG7"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "オッディッシュ（デルタ種）",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [43],
	hp: 40,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "取り組む",
			},
			damage: 10,
		},
		{
			cost: ["Water"],
			name: {
				'ja-jp': "ブロット",
			},
			effect: {
				'ja-jp': "Oddishから2つのダメージカウンターを削除します。",
			},
			damage: 10,
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
