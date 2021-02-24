import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Deerling",
		fr: "Vivaldaim",
	},
	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		585,
	],
	hp: 60,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
