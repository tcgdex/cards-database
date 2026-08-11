import { Card } from "models/database/card"
import Set from "../PCG8"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "duskull",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [355],
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "集める",
			},
			effect: {
				'ja-jp': "カードを描きます。",
			},
		},
		{
			cost: ["Psychic"],
			name: {
				'ja-jp': "スーパーPSYボルト",
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
