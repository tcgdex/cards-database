import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Grass Energy",
		'fr-fr': "Énergie Plante",
		'de-de': "Pflanzenenergie"
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
				tcgplayer: 85873,
				cardmarket: 275037
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85873,
				cardmarket: 275037
			},
		},
	],
	types: [
		"Grass"
	],
}

export default card
