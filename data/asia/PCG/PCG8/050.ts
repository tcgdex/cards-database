import { Card } from "models/database/card"
import Set from "../PCG8"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "槍",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [21],
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "スピアヘッド",
			},
			effect: {
				'ja-jp': "カードを描きます。",
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
