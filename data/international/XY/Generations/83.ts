import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Fairy Energy",
		'fr-fr': "Énergie Fairy de base",
	},

	illustrator: undefined,
	rarity: "Common",
	category: "Energy",
	types: ["Fairy"],

	set: Set,
	stage: "Basic",
	energyType: "Normal",

	thirdParty: {
		cardmarket: 288420,
		tcgplayer: 113741
	}
}

export default card
