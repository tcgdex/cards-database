import { Card } from 'models/database/card'
import Set from '../Power Keepers'

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
		cardmarket: 277412,
		tcgplayer: 86766
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card

