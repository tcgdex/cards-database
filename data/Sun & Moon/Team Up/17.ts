import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Ponyta",
		fr: "Ponyta",
	},
	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		77,
	],
	hp: 70,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Live Coal",
				fr: "Charbon Mutant",
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Stomp",
				fr: "Écrasement",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
