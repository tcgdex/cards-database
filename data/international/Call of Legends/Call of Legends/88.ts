import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Grass Energy",
		'fr-fr': "Énergie Plante",
		'de-de': "Pflanzenenergie"
	},

	illustrator: undefined,
	rarity: "Common",
	category: "Energy",
	set: Set,
	stage: "Basic",
	energyType: "Normal",

	types: [
		"Grass"
	],
	retreat: 0,
	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85880,
				cardmarket: 279731
			},
		},
		{
			type: "holo",
			stamp: ['player-rewards-program'],
			thirdParty: {
				cardmarket: 449588
			},
		},
	],

}

export default card
