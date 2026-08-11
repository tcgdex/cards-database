import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Water Energy",
		'fr-fr': "Énergie eau",
		'de-de': "Wasserenergie"
	},

	illustrator: undefined,
	rarity: "Common",
	category: "Energy",
	set: Set,
	stage: "Basic",
	energyType: "Normal",

	thirdParty: {
		cardmarket: 277624,
		tcgplayer: 90510
	},

	variants: [
		{
			type: "normal",
		}
	]
}

export default card
