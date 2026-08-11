import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Grass Energy",
		'fr-fr': "Énergie Plante",
		'de-de': "Pflanzenenergie"
	},

	illustrator: undefined,
	rarity: "Rare",
	category: "Energy",
	set: Set,
	stage: "Basic",
	energyType: "Normal",

	thirdParty: {
		tcgplayer: 85875,
		cardmarket: 276612
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85875,
				cardmarket: 276612
			},
		},
	],
}

export default card
