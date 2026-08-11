import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Darkness Energy",
		'fr-fr': "Énergie Obscurité",
		'de-de': "Finsternis-Energie"
	},

	illustrator: undefined,
	rarity: "Common",
	category: "Energy",
	set: Set,
	stage: "Basic",
	energyType: "Normal",

	thirdParty: {
		cardmarket: 277628,
		tcgplayer: 84676
	},

	variants: [
		{
			type: "normal",
		}
	]
}

export default card
