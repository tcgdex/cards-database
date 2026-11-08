import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Lightning Energy",
		'fr-fr': "Énergie Électrique",
		'de-de': "Elektroenergie"
	},

	illustrator: undefined,
	rarity: "Common",
	category: "Energy",
	set: Set,
	stage: "Basic",
	energyType: "Normal",

	retreat: 0,
	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 86781,
				cardmarket: 279734
			},
		},
	],

}

export default card
