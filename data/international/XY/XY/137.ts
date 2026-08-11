import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Fighting Energy",
		'fr-fr': "Énergie Combat",
		'es-es': "Energía Lucha",
		'it-it': "Energia Lotta",
		'pt-br': "Energia de Luta",
		'de-de': "Kampf-Energie"
	},

	illustrator: undefined,
	rarity: "Common",
	category: "Energy",
	set: Set,
	energyType: "Normal",

	thirdParty: {
		cardmarket: 281474,
		tcgplayer: 85448
	}
}

export default card
