import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Water Energy",
		'fr-fr': "Énergie Eau",
		'de-de': "Wasserenergie"
	},

	illustrator: undefined,
	rarity: "Rare",
	category: "Energy",
	set: Set,
	stage: "Basic",
	energyType: "Normal",

	thirdParty: {
		tcgplayer: 90507,
		cardmarket: 276614
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 90507,
				cardmarket: 276614
			},
		},
	],
}

export default card
