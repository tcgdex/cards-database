import { Card } from "models/database/card"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "チャックのpoliwrath",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [62],
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: {
				'ja-jp': "強力なパンチ",
			},
			effect: {
				'ja-jp': "衰弱や抵抗を適用しないでください。",
			},
			damage: 30,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
		},
	],
};

export default card
