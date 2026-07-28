import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Lightning Energy",
		fr: "Énergie Électrique",
		de: "Elektroenergie"
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
				tcgplayer: 86759,
				cardmarket: 275038
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 86759,
				cardmarket: 275038
			},
		},
	],
}

export default card
