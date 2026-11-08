import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Fighting Energy",
		'fr-fr': "Énergie Combat",
		'de-de': "Kampfenergie"
	},

	illustrator: undefined,
	rarity: "Rare",
	category: "Energy",
	set: Set,
	stage: "Basic",
	energyType: "Normal",

	thirdParty: {
		tcgplayer: 85439,
		cardmarket: 276617
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85439,
				cardmarket: 276617
			},
		},
	],
}

export default card
