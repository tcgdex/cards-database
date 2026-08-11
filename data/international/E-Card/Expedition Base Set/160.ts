import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Fighting Energy",
		'fr-fr': "Énergie Combat",
		'de-de': "Kampfenergie"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Energy",
	set: Set,
	stage: "Basic",
	energyType: "Normal",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85437,
				cardmarket: 275035
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85437,
				cardmarket: 275035
			},
		},
	],
	types: [
		"Fighting"
	],
}

export default card
