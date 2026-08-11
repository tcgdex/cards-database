import { Card } from "models/database/card"
import Set from "../E5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "サンカーン",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [191],
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "ロールアウトする",
			},
			damage: 10,
		},
		{
			cost: ["Grass"],
			name: {
				'ja-jp': "ブロット",
			},
			effect: {
				'ja-jp': "サンカーンにダメージカウンターがある場合は、それらの1つを削除します。",
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
			stamp: ["1st Edition"],
		},
	],
};

export default card
