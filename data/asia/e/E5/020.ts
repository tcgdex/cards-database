import { Card } from "models/database/card"
import Set from "../E5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "slugma",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [218],
	hp: 50,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fire", "Colorless"],
			name: {
				'ja-jp': "シング",
			},
			effect: {
				'ja-jp': "防御ポケモンは現在燃やされています。",
			},
			damage: 10,
		},
	],

	retreat: 2,

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
