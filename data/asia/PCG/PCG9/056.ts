import { Card } from "models/database/card"
import Set from "../PCG9"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "NATU（デルタ種）",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [177],
	hp: 40,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Darkness"],
			name: {
				'ja-jp': "フロップ",
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
