import { Card } from "models/database/card"
import Set from "../PCG9"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ニドリーノ（デルタ種）",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [33],
	hp: 70,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Darkness", "Colorless"],
			name: {
				'ja-jp': "怒り",
			},
			effect: {
				'ja-jp': "Nidorinoの各ダメージカウンターで10ダメージと10ダメージをさらに10回します。",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'ja-jp': "ホーンドリル",
			},
			damage: 30,
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
