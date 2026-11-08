import { Card } from "models/database/card"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カルバンハ",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [318],
	hp: 50,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Water"],
			name: {
				'ja-jp': "シャープフィン",
			},
			damage: 10,
		},
		{
			cost: ["Darkness", "Colorless"],
			name: {
				'ja-jp': "怒り",
			},
			effect: {
				'ja-jp': "Carvanhaの各ダメージカウンターの10ダメージと10ダメージをさらに10回します。",
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
