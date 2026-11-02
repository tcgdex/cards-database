import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Water Energy",
		fr: "Énergie Eau",
		de: "Wasserenergie"
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
