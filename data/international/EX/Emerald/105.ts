import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Psychic Energy",
		'fr-fr': "Énergie Psy",
		'de-de': "Psychoenergie"
	},

	illustrator: undefined,
	rarity: "Rare",
	category: "Energy",
	set: Set,
	stage: "Basic",
	energyType: "Normal",

	thirdParty: {
		tcgplayer: 88419,
		cardmarket: 276616
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88419,
				cardmarket: 276616
			},
		},
	],
}

export default card
