import { Card } from "models/database/card"
import Set from "../PCG8"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "チャーマンダー",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [4],
	hp: 50,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "報復",
			},
			effect: {
				'ja-jp': "ダメージ数のダメージ数は、チャーマンダーのダメージ数をカウンターします。",
			},
		},
		{
			cost: ["Fire", "Colorless"],
			name: {
				'ja-jp': "炎の尾",
			},
			damage: 20,
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
