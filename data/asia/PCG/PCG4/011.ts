import { Card } from "models/database/card"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Pineco",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [204],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "ラム",
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
