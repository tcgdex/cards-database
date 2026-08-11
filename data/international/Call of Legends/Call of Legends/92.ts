import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Psychic Energy",
		'fr-fr': "Énergie Psy",
		'de-de': "Psychoenergie"
	},

	illustrator: undefined,
	rarity: "Common",
	category: "Energy",
	set: Set,
	stage: "Basic",
	energyType: "Normal",

	types: [
		"Psychic"
	],
	retreat: 0,
	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88425,
				cardmarket: 279735
			},
		},
	],

}

export default card
