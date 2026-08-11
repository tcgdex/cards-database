import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Water Energy",
		'fr-fr': "Énergie Eau",
		'de-de': "Wasserenergie"
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
				tcgplayer: 90505,
				cardmarket: 275040
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 90505,
				cardmarket: 275040
			},
		},
	],
	types: [
		"Water"
	],
}

export default card
