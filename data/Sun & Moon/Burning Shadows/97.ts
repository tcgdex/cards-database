import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Morelull",
		fr: "Spododo",
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		755,
	],
	hp: 60,
	types: [
		"Fairy",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Ram",
				fr: "Collision",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
