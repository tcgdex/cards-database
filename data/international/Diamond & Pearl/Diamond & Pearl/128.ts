import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Fighting Energy",
		'fr-fr': "Énergie Combat",
		'de-de': "Kampfenergie"
	},

	illustrator: undefined,
	rarity: "Common",
	category: "Energy",
	set: Set,
	stage: "Basic",
	energyType: "Normal",

	thirdParty: {
		cardmarket: 277627,
		tcgplayer: 85442
	},

	variants: [
		{
			type: "normal",
		}
	]
}

export default card
