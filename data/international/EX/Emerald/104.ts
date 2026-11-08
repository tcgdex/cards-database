import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Lightning Energy",
		'fr-fr': "Énergie Électrique",
		'de-de': "Elektroenergie"
	},

	illustrator: undefined,
	rarity: "Rare",
	category: "Energy",
	set: Set,
	stage: "Basic",
	energyType: "Normal",

	thirdParty: {
		tcgplayer: 86762,
		cardmarket: 276615
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 86762,
				cardmarket: 276615
			},
		},
	],
}

export default card
