import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Togepi",
		fr: "Togepi",
	},
	illustrator: "HiRON",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		175,
	],
	hp: 40,
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
				en: "Sweet Kiss",
				fr: "Doux Baiser",
			},
			effect: {
				en: "Your opponent draws a card.",
				fr: "Votre adversaire pioche une carte.",
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
